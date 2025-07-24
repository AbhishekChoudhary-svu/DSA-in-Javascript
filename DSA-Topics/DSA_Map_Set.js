//Maps

function freqSortByChar(str) {
    
    let freqMap = new Map();
    for (let char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    
    let sortedArr = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    
    let result = '';
    for (let [char, count] of sortedArr) {
        result += char.repeat(count);
    }
    return result;
}

// console.log(freqSortByChar("rishi")); 

//Set..............

// const set = new Set([1,1,2,3,4,2,5,3])

// set.add(6)
// set.clear()
// console.log(set)

function intersectionOfTwoArray(arr1 ,arr2) {
    const result =[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                result.push(arr1[i])
                break;
            }
        }
    }
    return [...new Set(result)];
    
}

console.log(intersectionOfTwoArray([1,3,6,6,9,12,15], [2,4,6,6,8,10,12]))
