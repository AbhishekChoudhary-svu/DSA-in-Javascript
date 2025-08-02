// 🌐 1. Clone Graph (DFS + HashMap)
var cloneGraph = function(node) {
    if (!node) return null;

    let map = new Map();

    function dfs(curr) {
        if (!curr) return null;
        if (map.has(curr)) return map.get(curr);

        let copyNode = new Node(curr.val);
        map.set(curr, copyNode);

        for (let neighbor of curr.neighbors) {
            copyNode.neighbors.push(dfs(neighbor));
        }
        return copyNode;
    }

    return dfs(node);
};

// 🌳 2. Path Sum II (DFS on Binary Tree)
var pathSum = function(root, targetSum) {
    let res = [];

    function dfs(node, currSum, currPath) {
        if (!node) return;

        currPath.push(node.val);
        currSum += node.val;

        if (!node.left && !node.right && currSum === targetSum) {
            res.push([...currPath]);
        } else {
            dfs(node.left, currSum, currPath);
            dfs(node.right, currSum, currPath);
        }

        currPath.pop(); // backtrack
    }

    dfs(root, 0, []);
    return res;
};

// 📚 3. Course Schedule II (Topological Sort with Cycle Detection)
var findOrder = function(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const visited = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited
    const result = [];
    let hasCycle = false;

    for (let [course, prereq] of prerequisites) {
        adj[prereq].push(course);
    }

    function dfs(node) {
        if (visited[node] === 1) {
            hasCycle = true;
            return;
        }
        if (visited[node] === 2) return;

        visited[node] = 1;
        for (let neighbor of adj[node]) {
            dfs(neighbor);
        }

        visited[node] = 2;
        result.push(node);
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) dfs(i);
    }

    return hasCycle ? [] : result.reverse();
};
