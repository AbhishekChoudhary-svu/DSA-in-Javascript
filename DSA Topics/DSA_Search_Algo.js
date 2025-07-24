// Linear Search................

function linearSearch(mainStr,subStr) {
    for (let i = 0; i <= mainStr.length - subStr.length; i++) {
        let found = true;
        for (let j = 0; j < subStr.length; j++) {
            if (mainStr[i + j] !== subStr[j]) {
                found = false;
                break;
            }
        }
        if (found) return i; 
    }
    return -1;
}

// console.log(linearSearch("leetcode","bt"))

/// Binary Search ..............


function binarySearch(arr,target) {   // iterative method
    let first,last ,mid;
    first = arr[0]; last=arr[arr.length-1];
    while(first<=last){
        mid = Math.floor((first+last)/2);

         if(arr[mid] === target){
        return mid;
        }
        else if(arr[mid]>target){
            last = mid - 1
        }
        else{
            first = mid +1
        }

    }
   return -1;
    


}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9))

function binarySearchRecursive(arr, target, first = 0, last = arr.length - 1) {
    if (first > last) {
        return -1; 
    }

    const mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) {
        return mid; 
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, first, mid - 1); 
    } else {
        return binarySearchRecursive(arr, target, mid + 1, last); 
    }
}


// console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9], 11)); 


/// like x = 8.7 the Floor value will be 8 || Greatest Integer smaller value than x
/// like x = 8.7 the ceil value will be 9  || smallest Integer Greater value than x

function getFloorAndCeil(arr, x) {
    let low = 0, high = arr.length - 1;
    let floor = -1, ceil = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x)
            return [x, x]; 
        else if (arr[mid] < x) {
            floor = arr[mid];
            low = mid + 1;
        } else {
            ceil = arr[mid];
            high = mid - 1;
        }
    }
    return [floor, ceil];
}



// console.log(getFloorAndCeil([3, 4, 4, 7, 8, 10], 11));
