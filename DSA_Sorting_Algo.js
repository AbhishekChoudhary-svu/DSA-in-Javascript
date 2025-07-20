// Bubble Sort

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i =0; i < arr.length-1 ;i++){
            if( arr[i]> arr[i+1]){
                [arr[i] ,arr[i+1]] =[arr[i+1],arr[i]]
                swapped = true;
            }
        }
        
    } while (swapped);
    return arr;
}

// console.log(bubbleSort([4,8,9,4,2,4,1,3,7]))  // T.C = Best = O(N)  , Worst = O(N^2)

function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        let mainIdx = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]< arr[mainIdx]){
                mainIdx=j;
            }
        }
        if(mainIdx!== i){
          [arr[mainIdx], arr[i]]=  [arr[i], arr[mainIdx]]
        }
    }
    return arr;
}

// console.log(selectionSort([4,8,9,4,2,4,1,3,7]))


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
   
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}


// console.log(insertionSort([3, 7, 4, 10, 12])); 


function mergeSort(arr) {
    if(arr.length<2){
        return arr;
    }

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    
   return  merge(left,right)
}

function merge(left,right) {
    let mergeArr = []
    let i=0, j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            mergeArr.push(left[i])
            i++
        }else{
            mergeArr.push(right[j])
            j++
        }
    }
    while(i<left.length){
         mergeArr.push(left[i])
            i++
    }
    while(j<right.length){
         mergeArr.push(right[j])
            j++
    }

   return mergeArr;
}

// console.log(mergeSort([5,6,3,2,6,4,7,9])) // this is unoptimised for space i will do it later...


function quickSort(arr) {
  
  if (arr.length <= 1) {
    return arr;
  }

  
  let pivot = arr[0];
  let left = [];
  let right = [];

  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  
  return [...quickSort(left),pivot, ...quickSort(right)];
}


// let data = [4, 2, 7, 1, 9, 3];
// console.log(quickSort(data)); 

