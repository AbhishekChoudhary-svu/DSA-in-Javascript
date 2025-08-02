// 🔢 10. Combination Sum (Backtracking with Reuse Allowed)
var combinationSum = function(candidates, target) {
    let res = [];
    let comb = [];

    function backTrack(start, remain) {
        if (remain === 0) {
            res.push([...comb]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remain) continue;

            comb.push(candidates[i]);
            backTrack(i, remain - candidates[i]);
            comb.pop(); // backtrack
        }
    }

    backTrack(0, target);
    return res;
};




// 🧩 11. Solve Sudoku (Classic Backtracking)
var solveSudoku = function(board) {
    solve(board);
};

function solve(board) {
    let n = board[0].length;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === ".") {
                for (let val = 1; val <= 9; val++) {
                    if (numSafe(String(val), board, row, col)) {
                        board[row][col] = String(val);

                        if (solve(board)) return true;

                        board[row][col] = "."; // backtrack
                    }
                }
                return false;
            }
        }
    }

    return true;
}

function numSafe(val, board, row, col) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === val || board[i][col] === val) return false;

        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + i % 3;

        if (board[boxRow][boxCol] === val) return false;
    }
    return true;
}





// 🔄 12. Permutations (Backtracking + In-Place Swapping)
var permute = function(nums) {
    let res = [];

    function backTrack(start) {
        if (start === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];

            backTrack(start + 1);

            [nums[start], nums[i]] = [nums[i], nums[start]]; // backtrack
        }
    }

    backTrack(0);
    return res;
};


