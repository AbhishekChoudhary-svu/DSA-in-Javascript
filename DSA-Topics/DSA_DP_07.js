// 7 . Grid DP / Path DP

const uniquePath = (m, n) => {
  let map = new Map();

  function solve(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return 0;
    }

    if (i >= m - 1 && j >= n - 1) {
      return 1;
    }

    let key = `${i},${j}`;

    if (map.has(key)) return map.get(key);

    let right = solve(i, j + 1);
    let down = solve(i + 1, j);

    let res = right + down;

    map.set(key, res);

    return res;
  }
  return solve(0, 0);
};

const uniquePath1 = (m, n) => {
  let grid = Array.from({length : m}, ()=> Array(n));

  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(i==0 || j==0){
        grid[i][j] = 1
      }else{
         grid[i][j] = grid[i-1][j] + grid[i][j-1]
      }
    }
  }

  return grid[m-1][n-1]
};


const unique2Path = (m, n) => {
  let map = new Map();

  function solve(i, j ,grid) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 1) {
      return 0;
    }

    if (i >= m - 1 && j >= n - 1) {
      return 1;
    }

    let key = `${i},${j}`;

    if (map.has(key)) return map.get(key);

    let right = solve(i, j + 1);
    let down = solve(i + 1, j);

    let res = right + down;

    map.set(key, res);

    return res;
  }
  return solve(0, 0, grid);
};

const unique2Path1 = (maze) => {
  let m = maze.length;
  let n = maze[0].length;
  let grid = Array.from({length : m}, ()=> Array(n));

  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(maze[i][j]===1) return grid[i][j] = 0
      if(i==0 && j==0){
        grid[i][j] = 1
      }else{
        let right  = i> 0 ? grid[i-1][j] : 0;
        let down  = j> 0 ? grid[i][j-1] : 0;
       grid[i][j] = right + down
   
      }
    }
  }

  return grid[m-1][n-1]
};


const dungeonGame = (dungeon) => {
     let m = dungeon.length;
     let n = dungeon[0].length;

     let grid = Array.from({length : m+1} ,()=> Array(n+1).fill(Infinity))

     grid[m][n-1]  = 1
     grid[m-1][n]  = 1

     for(let i = m-1;i>=0;i--){
      for(let j= n-1;j>=0;j--){
        let minHealth = Math.min(grid[i+1][j],grid[i][j+1]);

        grid[i][j] = Math.max(1, minHealth - dungeon[i][j])
      }
     }
     return grid[0][0]
};