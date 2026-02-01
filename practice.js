let str1 = "great";
let str2 = "rgeat";

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

console.log(dropEgg(3, 7));
