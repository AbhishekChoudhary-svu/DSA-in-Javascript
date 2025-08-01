// ✅ Find Kth Largest Element in an Array (Using Counting Sort)
var findKthLargest = function(nums, k) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);

  let count = new Array(max - min + 1).fill(0);

  for (let num of nums) {
    count[num - min]++;
  }

  let remain = k;

  for (let i = count.length - 1; i >= 0; i--) {
    remain -= count[i];
    if (remain <= 0) {
      return i + min;
    }
  }

  return -1;
};

// ✅ Top K Frequent Elements
var topKFrequent = function(nums, k) {
  let map = new Map();
  let res = [];

  // Count frequency
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Sort by frequency descending
  let sort = [...map.entries()].sort((a, b) => b[1] - a[1]);

  // Get top k
  for (let i = 0; i < k; i++) {
    res.push(sort[i][0]);
  }

  return res;
};

// ✅ Find K Pairs with Smallest Sums (Using Min Heap / Priority Queue)
// Note: PriorityQueue needs to be defined or imported from a library
var kSmallestPairs = function(nums1, nums2, k) {
  if (!nums1 || !nums2 || k === 0) return [];

  let result = [];
  let pq = new PriorityQueue((a, b) => a[0] - b[0]); // Min heap

  // Initialize heap with pairs (nums1[i], nums2[0])
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    pq.enqueue([nums1[i] + nums2[0], i, 0]);
  }

  // Extract k smallest pairs
  while (pq.size() > 0 && result.length < k) {
    let [sum, i, j] = pq.dequeue();
    result.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length) {
      pq.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }

  return result;
};
