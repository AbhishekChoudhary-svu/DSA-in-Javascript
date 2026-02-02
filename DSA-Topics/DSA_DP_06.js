// 6 . Longest Increasing Subsequence (LIS)

const LIS = (num) => {
  let grid = Array.from({ length: num.length + 1 }, () =>
    Array(num.length + 1).fill(-1),
  );
  function solve(num, i, p) {
    let n = num.length;
    if (i >= n) return 0;
    if (grid[i][p + 1] !== -1) return grid[i][p + 1];

    let take = 0;
    if (p === -1 || num[p] < num[i]) {
      take = 1 + solve(num, i + 1, i);
    }
    let skip = solve(num, i + 1, p);
    return (grid[i][p + 1] = Math.max(take, skip));
  }
  return solve(num, 0, -1);
};

const LIS1 = (num) => {
  let n = num.length
  let max = 0;
  let dp = Array(n).fill(1);
  for(let i=0;i<n;i++){
    for(let j= 0;j<i;j++){
      if(num[j]< num[i]){
        dp[i] = Math.max(1+dp[j],dp[i])
        max = Math.max(max, dp[i])
      }
    }
  }
  return max
  
};

const MaxLenPairChain = (num) => {
  let grid = Array.from({ length: num.length + 1 }, () =>
    Array(num.length + 1).fill(-1),
  );
  function solve(num, i, p) {
    let n = num.length;
    if (i >= n) return 0;
    if (grid[i][p + 1] !== -1) return grid[i][p + 1];

    let take = 0;
    if (p === -1 || num[p][1] < num[i][0]) {
      take = 1 + solve(num, i + 1, i);
    }
    let skip = solve(num, i + 1, p);
    return (grid[i][p + 1] = Math.max(take, skip));
  }
  return solve(num.sort((a,b)=> a[0]-b[0]), 0, -1);
};

const MaxLenPairChain1 = (num) => {
  let n = num.length
   num.sort((a,b)=> a[0]-b[0])
  let max = 1;
  let dp = Array(n).fill(1);
  for(let i=0;i<n;i++){
    for(let j= 0;j<i;j++){
      if(num[j][1]< num[i][0]){
        dp[i] = Math.max(1+dp[j],dp[i])
        max = Math.max(max, dp[i])
      }
    }
  }
  return max
  
};


const LongStringChain = (num) => {
  let grid = Array.from({ length: num.length + 1 }, () =>
    Array(num.length + 1).fill(-1),
  );
  const isPredecessor = (wordA, wordB) => {
    if (wordB.length !== wordA.length + 1) return false;

    let i = 0;
    let j = 0;

    while (j < wordB.length) {
      if (wordA[i] === wordB[j]) {
        i++;
      }
      j++;
    }

    return i === wordA.length;
  };
  function solve(num, i, p) {
    let n = num.length;
    if (i >= n) return 0;
    if (grid[i][p + 1] !== -1) return grid[i][p + 1];

    let take = 0;
    if (p === -1 || isPredecessor(num[p], num[i])) {
      take = 1 + solve(num, i + 1, i);
    }
    let skip = solve(num, i + 1, p);
    return (grid[i][p + 1] = Math.max(take, skip));
  }
  return solve(
    num.sort((a, b) => a.length - b.length),
    0,
    -1,
  );
};

const LongStringChain1 = (num) => {
  let n = num.length;
  num.sort((a, b) => a.length - b.length);
  let max = 1;
  let dp = Array(n).fill(1);
  const isPredecessor = (wordA, wordB) => {
    if (wordB.length !== wordA.length + 1) return false;

    let i = 0;
    let j = 0;

    while (j < wordB.length) {
      if (wordA[i] === wordB[j]) {
        i++;
      }
      j++;
    }

    return i === wordA.length;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (isPredecessor(num[j] , num[i])) {
        dp[i] = Math.max(1 + dp[j], dp[i]);
        max = Math.max(max, dp[i]);
      }
    }
  }
  return max;
};

const numOfArrays = (n, m, k) => {
  const MOD = 1e9 + 7;
 
  const memo = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array(k + 1).fill(-1))
  );

  function solve(i, currentMax, remainK) {
    
    if (i === n) {
      return remainK === 0 ? 1 : 0;
    }
    
    if (remainK < 0) return 0;

    if (memo[i][currentMax][remainK] !== -1) return memo[i][currentMax][remainK];

    let total = 0;
    
    if (currentMax > 0) {
      let ways = (currentMax * solve(i + 1, currentMax, remainK)) % MOD;
      total = (total + ways) % MOD;
    }

    for (let nextVal = currentMax + 1; nextVal <= m; nextVal++) {
      total = (total + solve(i + 1, nextVal, remainK - 1)) % MOD;
    }

    return (memo[i][currentMax][remainK] = total);
  }

  return solve(0, 0, k);
};


const LongStringChain3PaitenceSorting = (num) => {
   let res = [];
  res.push(num[0])
   for(let i=1;i<num.length;i++){
      if(res[res.length-1]> num[i]){
        res[res.length-1] = num[i]
      }else{

        res.push(num[i])
      }
   }
   return res.length
};


const largestDivisibleSubset = (nums) => {
  if (nums.length === 0) return [];
  
  
  nums.sort((a, b) => a - b);
  
  const n = nums.length;
  const dp = new Array(n).fill(1);
  const parent = new Array(n).fill(-1);
  
  let maxIdx = 0;

 
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        parent[i] = j;
      }
    }
   
    if (dp[i] > dp[maxIdx]) {
      maxIdx = i;
    }
  }

  
  const result = [];
  let curr = maxIdx;
  while (curr !== -1) {
    result.push(nums[curr]);
    curr = parent[curr];
  }

  return result; 
};