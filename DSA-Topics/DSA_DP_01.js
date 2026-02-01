// 1. 0/1 Knapsack Pattern
const arr = [ 1,2,3,4,5,6];

const subsetSum = (arr, target) =>{
  let row = arr.length;
  let col = target;
 
  const grid = Array.from({length: row+1}, ()=> Array(col+1))

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(i==0 ){
        grid[i][j]= false
      }
      if(j==0 ){
        grid[i][j]= true
      }
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = grid[i-1][j-arr[i-1]] || grid[i-1][j]
      }else{
        grid[i][j] =  grid[i-1][j]
      }
    }
  }

  return grid[row][col]

}

const pertitionSum = (arr) =>{
  
  let sum = 0;
  for( let num of arr){
    sum+=num;
  }

  if(sum%2!==0) return false;

  let row = arr.length;
  let col = Math.floor(sum/2);
 
  const grid = Array.from({length: row+1}, ()=> Array(col+1))

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(i==0 ){
        grid[i][j]= false
      }
      if(j==0 ){
        grid[i][j]= true
      }
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = grid[i-1][j-arr[i-1]] || grid[i-1][j]
      }else{
        grid[i][j] =  grid[i-1][j]
      }
    }
  }

  return grid[row][col]

}

const countSubsetSum = (arr, target) =>{
  let row = arr.length;
  let col = target;
 
  const grid = Array.from({length: row+1}, ()=> Array(col+1))

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(i==0 ){
        grid[i][j]= 0
      }
      if(j==0 ){
        grid[i][j]= 1
      }
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = grid[i-1][j-arr[i-1]] + grid[i-1][j]
      }else{
        grid[i][j] =  grid[i-1][j]
      }
    }
  }
  return grid[row][col]

}

const minSumDiff = (arr) =>{
  let sum=0;
  let res = [];
  let min = Infinity;
  for(let num of arr){
    sum+=num;
  }

   const grid = subsetSum(arr,sum)
   for(let i=1;i<=Math.floor(sum/2);i++){
    if(grid[arr.length][i]=== true){
      res.push(i)
    }
   }

   for(let i=0;i<arr.length;i++){
       min = Math.min(min,sum - (2*res[i]))
   }
   return min
  
}

const countMinSumDiff = (arr,diff) =>{
  let arrSum=0;
  
  for(let num of arr){
    arrSum+=num;
  }

  let sum1 = Math.floor((arrSum + diff)/2)


  
   
    const subsetSum = (arr, target) =>{
  let row = arr.length;
  let col = target;
 
  const grid = Array.from({length: row+1}, ()=> Array(col+1))

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(i==0 ){
        grid[i][j]= 0
      }
      if(j==0 ){
        grid[i][j]= 1
      }
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = grid[i-1][j-arr[i-1]] + grid[i-1][j]
      }else{
        grid[i][j] =  grid[i-1][j]
      }
    }
  }

  return grid[row][col];

}

 return subsetSum(arr,sum1)
  
}

const targetSum = (arr,sum) =>{
  let arrSum=0;
  
  for(let num of arr){
    arrSum+=num;
  }

  let sum1 = Math.floor((arrSum + sum)/2)


  
   
    const subsetSum = (arr, target) =>{
  let row = arr.length;
  let col = target;
 
  const grid = Array.from({length: row+1}, ()=> Array(col+1))

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(i==0 ){
        grid[i][j]= 0
      }
      if(j==0 ){
        grid[i][j]= 1
      }
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(arr[i-1]<=j){
        grid[i][j] = grid[i-1][j-arr[i-1]] + grid[i-1][j]
      }else{
        grid[i][j] =  grid[i-1][j]
      }
    }
  }

  return grid[row][col];

}

 return subsetSum(arr,sum1)
  
}

