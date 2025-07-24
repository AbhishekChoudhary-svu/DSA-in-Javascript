

function prefixSum(arr) {
    let prefixArr = []
    prefixArr[0]=0
    for(let i =0 ;i <arr.length;i++){
        prefixArr[i+1] = prefixArr[i] + arr[i]
        
    }
    return prefixArr;
    
}

// console.log(prefixSum([-2, 0, 3, -5, 2, -1]))

const subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let prefixSum =0;
    let count = 0;

    for(let i=0;i<nums.length;i++){
        prefixSum += nums[i]
        console.log(prefixSum)
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
    
};

console.log(subarraySum([1,2,3,4,5,6,7,8],6))