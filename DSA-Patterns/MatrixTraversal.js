// 🟦 7. Set Matrix Zeroes (In-place with First Row/Col Markers)
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    for (let j = 0; j < col; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRowZero) {
        for (let j = 0; j < col; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColZero) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }

    /*
    // Alternate approach using extra space:
    let rows = new Set();
    let cols = new Set();

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] === 0){
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(rows.has(i) || cols.has(j)){
                matrix[i][j] = 0;
            }
        }
    }
    */
};




// 🏝️ 8. Number of Islands (DFS on Grid)
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') return;

        grid[i][j] = '0'; // mark visited

        dfs(i + 1, j); 
        dfs(i - 1, j); 
        dfs(i, j + 1); 
        dfs(i, j - 1); 
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j); 
            }
        }
    }

    return count;
};





// 🔄 9. Spiral Matrix (Bounded Layer Traversal)
var spiralOrder = function(matrix) {
    let res = [];
    let rowBegin = 0, rowEnd = matrix.length - 1;
    let colBegin = 0, colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {

        for (let i = colBegin; i <= colEnd; i++) {
            res.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd]);
        }
        colEnd--;

        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                res.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }

        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin]);
            }
            colBegin++;
        }
    }

    return res;
};
