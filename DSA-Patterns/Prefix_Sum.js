// ✅ 1. Prefix Sum Array Function
function prefixSum(arr) {
    let prefixArr = [];
    prefixArr[0] = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixArr[i + 1] = prefixArr[i] + arr[i];
    }
    return prefixArr;
}

// Example usage:
// console.log(prefixSum([-2, 0, 3, -5, 2, -1]));


// ✅ 2. NumArray Class with sumRange using Prefix Sum
var NumArray = function(nums) {
    this.prefixArr = [];
    this.prefixArr[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        this.prefixArr[i + 1] = this.prefixArr[i] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.prefixArr[right + 1] - this.prefixArr[left];
};

// Example usage:
// let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(numArray.sumRange(0, 2));  // Output: 1


// ✅ 3. Find Max Length of Subarray with Equal 0s and 1s
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1);
    let maxLength = 0;
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += (nums[i] === 0) ? -1 : 1;
        if (map.has(prefixSum)) {
            maxLength = Math.max(maxLength, i - map.get(prefixSum));
        } else {
            map.set(prefixSum, i);
        }
    }
    return maxLength;
};

// Example usage:
// console.log(findMaxLength([0,1,0,1]));  // Output: 4


// ✅ 4. Subarray Sum Equals K using Prefix Sum and HashMap
const subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let prefixSum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
};

// 🔍 Example usage:
console.log(subarraySum([1, 2, 3, 4, 5, 6, 7, 8], 6));  // Output: 2
