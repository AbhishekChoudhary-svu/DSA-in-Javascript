// 4. Matrix Chain Multiplication (MCM) / Interval DP

const MCM = (arr) => {
  let n = arr.length;
  let grid = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));

  function solve(arr, i, j) {
    if (i >= j) return 0;

    if (grid[i][j] !== -1) return grid[i][j];

    let minCost = Infinity;

    for (let k = i; k < j; k++) {
      let temp =
        solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];

      minCost = Math.min(minCost, temp);
    }
    return (grid[i][j] = minCost);
  }
 return solve(arr, 1, n - 1);
};

const palindromePart = (str) => {
  let n = str.length;
  let grid = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));

  function isPalindrome(str,i,j){
    while(i<j){
      if(str[i]!==str[j]) return false;
      i++
      j--
    }
    return true
  }

  function solve(str, i, j) {
    if (i >= j) return 0;

    if (isPalindrome(str, i ,j)) return 0;

    if (grid[i][j] !== -1) return grid[i][j];

    let minCost = Infinity;

    for (let k = i; k < j; k++) {
      let temp =
        solve(str, i, k) + solve(str, k + 1, j) + 1;

      minCost = Math.min(minCost, temp);
    }
    return grid[i][j] =minCost;
  }
 return solve(str, 0, n - 1);
};

const countExBool3D = (str) => {
  let n = str.length;
  let grid = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(2).fill(-1)),
  );

  function solve(str, i, j, isTrue) {
    if (i > j) return 0;

    if (i === j) {
      if (isTrue === 1) return str[i] === "T" ? 1 : 0;
      else return str[i] === "F" ? 1 : 0;
    }

    if (grid[i][j][isTrue] !== -1) return grid[i][j][isTrue];

    let ans = 0;

    for (let k = i + 1; k < j; k = k + 2) {
      let LT = solve(str, i, k - 1, 1);
      let LF = solve(str, i, k - 1, 0);
      let RT = solve(str, k + 1, j, 1);
      let RF = solve(str, k + 1, j, 0);

      let op = str[k];

      if (op === "|") {
        if (isTrue === 1) {
          ans += LT * RT + LT * RF + LF * RT;
        } else {
          ans += LF * RF;
        }
      } else if (op === "&") {
        if (isTrue === 0) {
          ans += LF * RF + LT * RF + LF * RT;
        } else {
          ans += LT * RT;
        }
      } else if (op === "^") {
        if (isTrue === 1) {
          ans += LT * RF + LF * RT;
        } else {
          ans += LT * RT + LF * RF;
        }
      }
    }
    return (grid[i][j][isTrue] = ans);
  }
  return solve(str, 0, n - 1, 1);
};

const isScrambled = (str1, str2) => {
  const map = new Map();

  function solve(a, b) {
    if (a === b) return true;

    if (a.length !== b.length) return false;

    if (a.split('').sort().join('') !== b.split('').sort().join(''))
      return false;

    const key = `${a}_${b}`;

    if (map.has(key)) return map.get(key);

    const n = a.length;
    let res = false;

    for (let i = 1; i < n; i++) {
      const noSwap =
        solve(a.substring(0, i), b.substring(0, i)) &&
        solve(a.substring(i), b.substring(i));
      if (noSwap) {
        res = true;
        break;
      }
      const swap =
        solve(a.substring(0, i), b.substring(n - i)) &&
        solve(a.substring(i), b.substring(0, n - i));
      if (swap) {
        res = true;
        break;
      }
    }
    map.set(key, res);
    return res;
  }
  return solve(str1, str2);
};

const dropEgg = (egg, floor) => {
  let m = egg
  let n = floor;
  let grid = Array.from({length: m+1},()=> Array(n+1).fill(-1))

  function solve(e, f) {
    if (f === 0 || f === 1) return f;
    if( e === 1 ) return f;

    if(grid[e][f] !== -1) return grid[e][f];

    let min = Infinity

    for(let i = 1 ; i<=f;i++){

      let temp = 1 + Math.max(solve(e-1,i-1), solve(e,f-i))

      min = Math.min(min , temp)
    }

  return grid[e][f]= min;
   

 
  }
  return solve(egg, floor);
};
