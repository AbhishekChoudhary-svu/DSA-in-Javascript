// ✅ Two Sum II – Input Array Is Sorted
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let currSum = numbers[left] + numbers[right];
        if (currSum === target) {
            return [left + 1, right + 1]; // 1-based index
        } else if (currSum < target) {
            left++;
        } else {
            right--;
        }
    }
};

// ✅ Three Sum – Find all unique triplets that sum to 0
var threeSum = function(nums) {
    const res = [];
    if (!nums || nums.length < 3) return res;

    nums.sort((a, b) => a - b); // Sort array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};

// ✅ Container With Most Water – Max Area
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// ✅ Trapping Rain Water – Two Pointer Approach
var trap = function(height) {
    let ans = 0;
    let left = 0;
    let right = height.length - 1;
    let lmax = 0, rmax = 0;

    while (left < right) {
        lmax = Math.max(lmax, height[left]);
        rmax = Math.max(rmax, height[right]);

        if (lmax < rmax) {
            ans += lmax - height[left];
            left++;
        } else {
            ans += rmax - height[right];
            right--;
        }
    }

    return ans;
};
