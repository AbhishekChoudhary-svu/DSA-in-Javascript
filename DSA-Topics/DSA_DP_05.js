// 5 . Linear DP / 1D DP

const Fibbo = (num) => {
  let arr = Array(num + 1).fill(-1);

  function F(n) {
    if (n == 0 || n == 1) return n;
    if (arr[n] !== -1) return arr[n];

    return (arr[n] = F(n - 1) + F(n - 2));
  }
  return F(num);
};

const Fibbo1 = (num) => {
  if (num <= 1) return num;
  let dp = [0, 1];
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[num];
};

const climbStair = (s) => {
  let arr = Array(s + 1).fill(-1);
  if (s < 0) return 0;
  if (s === 0) return 1;

  if (arr[s] !== -1) return arr[s];

  return (arr[s] = climbStair(s - 1) + climbStair(s - 2));
};

const climbStair1 = (s) => {
  if (s === 0 || s === 1 || s === 2) return s;
  let arr = Array(s + 1);

  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= s; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[s];
};

const climbStair2 = (s) => {
  if (s === 0 || s === 1 || s === 2) return s;

  let first = 1,
    second = 2;
  for (let i = 3; i <= s; i++) {
    let curr = first + second;
    first = second;
    second = curr;
  }

  return second;
};

const houseRobber = (arr) => {
  let arr1 = Array(arr.length + 1).fill(-1);
  function solve(num, i) {
    if (i >= num.length) return 0;
    if (arr1[i] !== -1) return arr1[i];
    let steal = num[i] + solve(num, i + 2);
    let skip = solve(num, i + 1);

    return (arr1[i] = Math.max(steal, skip));
  }
  return solve(arr, 0);
};

const houseRobber1 = (num) => {
  let arr = Array(num.length + 1);
  arr[0] = 0;
  arr[1] = num[0];

  for (let i = 2; i <= num.length; i++) {
    let steal = num[i - 1] + arr[i - 2];
    let skip = arr[i - 1];
    arr[i] = Math.max(steal, skip);
  }
  return arr[num.length];
};

const houseRobber2 = (num) => {
  if (num.length === 0) return 0;
  if (num.length === 1) return num[0];

  let firstPrev = 0;
  let secondPrev = num[0];

  for (let i = 2; i <= num.length; i++) {
    let steal = num[i - 1] + firstPrev;
    let skip = secondPrev;
    firstPrev = skip;
    secondPrev = Math.max(steal, skip);
  }
  return secondPrev;
};

const house2Robber = (num) => {
  if (num.length === 0) return 0;
  if (num.length === 1) return num[0];

  const houseRobber = (arr) => {
    let arr1 = Array(arr.length + 1).fill(-1);
    function solve(num, i) {
      if (i >= num.length) return 0;
      if (arr1[i] !== -1) return arr1[i];
      let steal = num[i] + solve(num, i + 2);
      let skip = solve(num, i + 1);

      return (arr1[i] = Math.max(steal, skip));
    }
    return solve(arr, 0);
  };

  let secne1 = houseRobber(num.slice(0, num.length - 1));
  let secne2 = houseRobber(num.slice(1));

  return Math.max(secne1, secne2);
};

const house2Robber1 = (num) => {
  const n = num.length;
  if (n === 0) return 0;
  if (n === 1) return num[0];

  let arr = Array(n).fill(0);
  arr[0] = 0;
  arr[1] = num[0];

  for (let i = 2; i < n; i++) {
    let steal = num[i - 1] + arr[i - 2];
    let skip = arr[i - 1];
    arr[i] = Math.max(steal, skip);
  }
  let scene1 = arr[n - 1];

  let arr1 = Array(n + 1).fill(0);
  arr1[0] = 0;
  arr1[1] = 0;
  arr1[2] = num[1];

  for (let i = 3; i <= n; i++) {
    let steal = num[i - 1] + arr1[i - 2];
    let skip = arr1[i - 1];
    arr1[i] = Math.max(steal, skip);
  }
  let scene2 = arr1[n];

  return Math.max(scene1, scene2);
};


const maxAlterSubSeq = (num) => {
  let arr = Array.from({ length: num.length }, () => [-1,-1]);

  function solve(idx, flag) {

    if (idx >= num.length) return 0;
     let flagIdx = flag ? 1 : 0
    if (arr[idx][flagIdx] !== -1) return arr[idx][flagIdx];

    let skip = solve(idx + 1, flag);

    let val = num[idx];

    if (flag === false) val = -val;
    let take = solve(idx + 1, !flag) + val;

    return (arr[idx][flagIdx] = Math.max(take, skip));
  }
  return solve(0, true);
};


const maxAlterSubSeq1 = (num) => {
  let arr = Array.from({ length: num.length+1 }, () => [0,0]);
  n = num.length

    for(let i=1;i<= n;i++){
      arr[i][0] = Math.max(arr[i-1][1] - num[i-1], arr[i-1][0])
      arr[i][1] = Math.max(arr[i-1][0] + num[i-1], arr[i-1][1])
    }
    return Math.max(arr[n][0], arr[n][1])
    
 
};

const maxAlterSubSeq2 = (num) => {
  let even = 0;
  let odd = 0;

    for(let val of num){
      let prevEven = even;
      let prevOdd = odd;
      even = Math.max(prevOdd - val, prevEven)
      odd = Math.max(prevEven + val, prevOdd)
    }
    return odd
    
 
};
