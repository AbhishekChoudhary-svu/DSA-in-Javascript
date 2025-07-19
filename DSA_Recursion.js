
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; 
    }
    return num * factorial(num - 1); 
}

// console.log(factorial(5)); 


function sumOfArray(arr) {
    if(arr.length ===0 ){
        return 0;
    }
    const lastNum = arr.pop()
    return lastNum + sumOfArray(arr)
}

// console.log(sumOfArray([1,2,3,4,5]))

function fibonacci(num) {
    if(num <2 ){
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

// console.log(fibonacci(10))