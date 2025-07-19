const arr =[1,2,4,5,7,8,9];

function findTheElement(arr,num) {
    for(let x of arr){
        if(x=== num){
            return true;
        }
    }
     return false  
}

// console.log(findTheElement(arr,4))

// console.log(arr.includes(7))  //inbuilt function of searching an element from an array

function findTheElementIndex(arr,num) {
    for(let i=0; i<arr.length;i++){
        if(arr[i]=== num){
            return i;
        }
    }
     return -1  
}

// console.log(findTheElementIndex(arr,6))

// console.log(arr.indexOf(4))  //inbuilt function of searching an element index from an array

// arr.splice(2,0,3) // first number define the index then for delete how many and last add number
// console.log(arr)

// console.log(arr.slice(0,4)) // its return a subArr from where to where like index 


// shallow copy

// const arr1= arr;
// arr1.splice(2,4)  // this will delete from both arr 
// console.log(arr1)


// Deep copy
// const arr1= [...arr];
// const arr2= Array.from(arr);  /// this will delete from the only copied Arr
// const arr3= arr.concat();


// combines both arr 

// const newArr = [...arr,1,2,3]
// console.log(newArr)


function isArrayEqual(arr1,arr2) {
    return arr1.length === arr2.length && arr1.every((ele,i)=>arr1[i]===arr2[i])
    // this every will check the every element from arr1 to arr2 
}
// console.log(isArrayEqual([1,2],[1,2]))

/// sort in built function 

// arr.sort((a,b)=>b-a)  // if a do b-a this will give high to low and vice versa

// console.log(arr)


/// map, filter, reduce, and find in JavaScript with examples

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

// const evens = numbers.filter((num) => num % 2 === 0);

// console.log(evens); // [2, 4]

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0); // initial value = 0

// console.log(sum); // 15

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// // Find the user with name "Bob"
// const user = users.find((u) => u.name === "Bob");

// console.log(user); // { id: 2, name: "Bob" }


//Problem: Write a function to find the maximum number in an array.

function findMax(arr) {
   return Math.max(...arr)
}

// console.log(findMax(arr));

function isSorted(arr) {
    const sorted = [...arr].sort((a,b)=>a-b)
   return sorted.every((ele,i)=>ele===arr[i])
}
// console.log(isSorted([1,2,3]));

function removeDuplicates(arr) {
    return arr.filter((ele, i) => arr.indexOf(ele) === i);
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function pairSum(arr,target) {
    let newArr=[]
    for(let i=0; i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            newArr.push([arr[i],arr[j]])
        }
    }
    }
    return newArr
    
}
// console.log(pairSum([1, 2, 3, 4, 5], 6));

function rotate(arr,num) {
    const arr1 = arr.splice(-num );
    arr.unshift(...arr1)
    return arr;
}

// console.log(rotate([1, 2, 3, 4, 5], 2));


