//3. Longest Common Subsequence (LCS)

const LCSequence = (str1,str2) =>{
   
  let row = str1.length;
  let col = str2.length;

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = 0;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(str1[i-1]===str2[j-1]){
        grid[i][j] = 1+ grid[i-1][j-1]
      }else{
        grid[i][j] = Math.max(grid[i-1][j] , grid[i][j-1])
      }
      
    }
  }
  return grid[row][col]
  
}

const LCSubstring = (str1,str2) =>{
   
  let row = str1.length;
  let col = str2.length;
  let maxLen = 0;

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = 0;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(str1[i-1]===str2[j-1]){
        grid[i][j] = 1+ grid[i-1][j-1]
        maxLen = Math.max(grid[i][j], maxLen)
      }else{
        grid[i][j] = 0
      }
      
    }
  }
  return maxLen
  
}

const printLCSeq = (str1,str2) =>{
   
  let row = str1.length;
  let col = str2.length;
  let printStr ="";

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = 0;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(str1[i-1]===str2[j-1]){
        grid[i][j] = 1+ grid[i-1][j-1]
        
      }else{
        grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1])
      }
      
    }
  }
  let i = row , j =col;

  while(i> 0 && j>0){
    if(str1[i-1]===str2[j-1]){
      printStr+= str1[i-1]
      i--
      j--
    }else{
      if(grid[i-1][j]> grid[i][j-1]){
        i--
      }else{
        j--
      }
    }
  }
  return printStr.split("").reverse().join("")
  
}

const SCS = (str1,str2) =>{
   
  let m = str1.length;
  let n = str2.length;

  return m+n-LCSequence(str1,str2)
  
}

const LPS = (str1) => {
  function LCS(str1, str2) {
    let row = str1.length;
    let col = str2.length;

    let grid = Array.from({ length: row + 1 }, () => Array(col + 1));

    for (let i = 0; i <= row; i++) {
      for (let j = 0; j <= col; j++) {
        if (j == 0) grid[i][j] = 0;
        if (i == 0) grid[i][j] = 0;
      }
    }

    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          grid[i][j] = 1 + grid[i - 1][j - 1];
        } else {
          grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
      }
    }
    return grid[row][col]
  }

  return LCS(str1, str1.split("").reverse().join(""));
};

const printSCS = (str1,str2) =>{
   
  let row = str1.length;
  let col = str2.length;
  let printStr ="";

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = 0;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(str1[i-1]===str2[j-1]){
        grid[i][j] = 1+ grid[i-1][j-1]
        
      }else{
        grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1])
      }
      
    }
  }
  let i = row , j =col;

  while(i> 0 && j>0){
    if(str1[i-1]===str2[j-1]){
      printStr+= str1[i-1]
      i--
      j--
    }else{
      if(grid[i-1][j]> grid[i][j-1]){
        printStr+= str1[i-1]
        i--
      }else{
        printStr+= str2[j-1]
        j--
      }
    }
  }
  while(i>0){
    printStr+= str1[i-1]
        i--
  }
  while(j>0){
    printStr+= str2[j-1]
        j--
  }
  return printStr.split("").reverse().join("")
  
}

const LRSequence = (str1,str2) =>{
   
  let row = str1.length;
  let col = str2.length;

  let grid = Array.from({length: row+1}, ()=> Array(col+1));

  for(let i=0;i<=row;i++){
    for(let j=0;j<=col;j++){
      if(j==0) grid[i][j] = 0;
      if(i==0) grid[i][j] = 0;
    }
  }

  for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
      if(str1[i-1]===str2[j-1] && i!==j){
        grid[i][j] = 1+ grid[i-1][j-1]
      }else{
        grid[i][j] = Math.max(grid[i-1][j] , grid[i][j-1])
      }
      
    }
  }
  return grid[row][col]
  
}
