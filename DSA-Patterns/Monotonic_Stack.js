// 1. Next Greater Element I
var nextGreaterElement = function(nums1, nums2) {
    const n = nums2.length;
    const stack = [];
    const result = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = nums2[i]; 
        }
        stack.push(i);
    }

    const output = [];
    for (let elem of nums1) {
        let index = nums2.indexOf(elem);
        output.push(result[index]);
    }

    return output;
};

// 2. Daily Temperatures
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = i - idx; 
        }
        stack.push(i);
    }
    return result;
};

// 3. Largest Rectangle in Histogram
var largestRectangleArea = function(heights) {
    let ans = 0;
    let stack = [];
    for (let i = 0; i <= heights.length; i++) {
        let h = (i === heights.length) ? 0 : heights[i];
        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            ans = Math.max(ans, height * width);
        }
        stack.push(i);
    }
    return ans;
};

// 4. Online Stock Span
var StockSpanner = function() {
    this.stack = [];
};

StockSpanner.prototype.next = function(price) {
    let span = 1;
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
};
