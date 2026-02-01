// 2. Unbounded Knapsack Pattern

const rodCutting = (arr,len) =>{
   
  let row = arr.length;
  let col = len;

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = 0;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(i<=j){
        grid[i][j] = Math.max(arr[i-1] + grid[i][j-i] , grid[i-1][j])
      }else{
        grid[i][j] = grid[i-1][j]
      }
      
    }
  }
  return grid[row][col]
  
}

const maxWayCoinChange = (arr,sum) =>{
   
  let row = arr.length;
  let col = sum;

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(i==0) grid[i][j] = 0;
      if(j==0) grid[i][j] = 1;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = grid[i][j-arr[i-1]] + grid[i-1][j]
      }else{
        grid[i][j] = grid[i-1][j]
      }
      
    }
  }
  return grid[row][col]
  
}

const minCoinChange = (arr,sum) =>{
   
  let row = arr.length;
  let col = sum;

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = Infinity;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = Math.min(grid[i][j-arr[i-1]]+1 , grid[i-1][j])
      }else{
        grid[i][j] = grid[i-1][j]
      }
      
    }
  }
  let result= grid[row][col]

  return result === Infinity ? -1 : result;
  
}