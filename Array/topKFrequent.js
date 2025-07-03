// Given an integer array nums and an integer k, 
// return the k most frequent elements. 
// You may return the answer in any order.

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * Returns the k most frequent elements in an array.
 * This function counts the frequency of each element in the array,
 * sorts them by frequency, and returns the top k elements.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function topKFrequent(nums, k){

    let map = new Map();
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);
    let res = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    return res.slice(0, k).map(a => a[0]);
};