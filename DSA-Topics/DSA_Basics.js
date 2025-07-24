function sumOfDigitNumber(num) {
    let sum=0;
    while(num>0){
        sum= sum+num%10;
       num = Math.floor(num/10);
    }
    return sum;
    
}

// console.log(sumOfDigitNumber(12345))

function findNumberOfDigit(num) {
    
    let count=0;
    while(num>0){

        count++;
       num = Math.floor(num/10);
    }
    return count;
    
}

// console.log(findNumberOfDigit(123456789))

function findPalindroneOrNot(num) {
    
    let count=0;
    const finalnum= num;
    
    while(num>0){  
        count= count*10 + (num%10)      
        num = Math.floor(num/10);      
    }    
    return (count== finalnum)
    
    
}

// console.log(findPalindroneOrNot(121))


function fibonachi(num) {
    if(num<2){
        return num;
    }
    
    let prev=0,curr=1,next;
    
    for(let i=2 ; i<=num;i++){  
            next = prev+curr;
            prev=curr;
            curr=next;
    }    
    return next;   
}

// console.log(fibonachi(10))

function missingNumberFromArray(arr) {
    let n= arr.length;
    let = n * (n + 1) / 2;
    let actSum=0;
   
     for(let i=0; i<arr.length ;i++ ){
       actSum= actSum+ arr[i];
    }
    return exSum - actSum;
}

// console.log(missingNumberFromArray([1,2,0]))


