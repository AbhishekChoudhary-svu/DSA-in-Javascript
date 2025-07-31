// 1. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= left) {
            left = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
}

// 2. Longest Repeating Character Replacement
// Given a string s and an integer k, find the length of the longest substring
// that can be obtained by replacing at most k characters so that all the characters in the substring are the same.
function characterReplacement(s, k) {
    let map = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxWindow = 0;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(s[i]));

        let windowLen = i - left + 1;
        if (windowLen - maxFreq > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        windowLen = i - left + 1;
        maxWindow = Math.max(maxWindow, windowLen);
    }
    return maxWindow;
}

// 3. Sliding Window Maximum
// Given an array nums and an integer k,
// find the maximum value in each sliding window of size k.
function maxSlidingWindow(nums, k) {
    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        // Remove indices whose corresponding values are less than nums[i]
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

// 4. Minimum Window Substring
// Given strings s and t, find the minimum window in s that contains all the characters of t as a substring.
function minWindow(s, t) {
    if (t.length === 0) return "";

    const tmap = {};
    for (let char of t) {
        tmap[char] = (tmap[char] || 0) + 1;
    }
    const window = {};
    let count = 0;
    const needCount = Object.keys(tmap).length;

    let left = 0;
    let minLength = Infinity;
    let minStart = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        window[c] = (window[c] || 0) + 1;

        if (tmap[c] && window[c] === tmap[c]) {
            count++;
        }
        while (count === needCount) {
            if (i - left + 1 < minLength) {
                minLength = i - left + 1;
                minStart = left;
            }

            let leftChar = s[left];
            window[leftChar]--;
            if (tmap[leftChar] && window[leftChar] < tmap[leftChar]) {
                count--;
            }
            left++;
        }
    }
    return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
}
