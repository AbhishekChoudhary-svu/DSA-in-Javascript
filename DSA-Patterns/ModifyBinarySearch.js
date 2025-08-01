// ✅ Search in Rotated Sorted Array
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Left side is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } 
        // Right side is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

// ✅ Find Minimum in Rotated Sorted Array
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = Infinity;

    while (left <= right) {
        if (nums[left] < nums[right]) {
            min = Math.min(min, nums[left]);
            break;
        }

        let mid = Math.floor((left + right) / 2);
        min = Math.min(min, nums[mid]);

        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return min;
};

// ✅ Search a 2D Matrix (Staircase Search)
var searchMatrix = function(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;

    let row = 0;
    let col = m - 1;

    while (row < n && col >= 0) {
        if (matrix[row][col] === target) return true;

        if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
};
