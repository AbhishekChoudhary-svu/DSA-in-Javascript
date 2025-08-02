// 🌲 4. Binary Tree Level Order Traversal (BFS)
var levelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let level = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        res.push(level);
    }

    return res;
};

// 🍊 5. Rotting Oranges (Multi-Source BFS)
var orangesRotting = function(grid) {
    if (!grid) return -1;

    let row = grid.length;
    let col = grid[0].length;
    let fresh = 0;
    let queue = [];
    let head = 0;

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === 1) fresh++;
            else if (grid[r][c] === 2) queue.push([r, c]);
        }
    }

    let min = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (head < queue.length && fresh > 0) {
        let size = queue.length - head;

        for (let i = 0; i < size; i++) {
            let [x, y] = queue[head++];
            for (let [dx, dy] of directions) {
                let nr = x + dx;
                let nc = y + dy;
                if (nr >= 0 && nc >= 0 && nr < row && nc < col && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }

        min++;
    }

    return fresh === 0 ? min : -1;
};

// 🔤 6. Word Ladder (BFS with String Transformations)
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [];
    let head = 0;
    queue.push([beginWord, 1]);
    let visited = new Set();
    visited.add(beginWord);

    while (queue.length) {
        let [curr, level] = queue.shift();

        if (curr === endWord) return level;

        for (let i = 0; i < curr.length; i++) {
            for (let j = 97; j <= 122; j++) {
                let next = curr.slice(0, i) + String.fromCharCode(j) + curr.slice(i + 1);
                if (wordSet.has(next) && !visited.has(next)) {
                    visited.add(next);
                    queue.push([next, level + 1]);
                }
            }
        }
    }

    return 0;
};