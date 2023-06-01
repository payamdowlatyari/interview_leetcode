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
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export default function topKFrequent(nums, k){

    if (nums.length == 1 && k == 1) return nums;

    let map = {};
    let i = 0;

    while (i < nums.length) {
        if (!map[nums[i]]) {
            map[nums[i]] = {};
            map[nums[i]] = 1;
        } 
            map[nums[i]]++;
        i++;
    }

    let sorted = [];

    for (let item in map) {
        sorted.push([item, map[item]]);
    }

    sorted.sort(function(a, b) {
    return b[1] - a[1];
    });
    
    let res = [];
    let j = 0;

    while (j < k) {
        res.push(sorted[j][0])
        j++;
    }    
    return res;
};