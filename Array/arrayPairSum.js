// Array Partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
// such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 
// Constraints:
// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104

/**
 * Find the maximum sum of min(ai, bi) for all pairs (ai, bi).
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */
export function arrayPairSum(nums) {
    
    nums.sort((a, b) => a - b);

    return nums.reduce((acc, _, i) => i % 2 === 0 ? acc + nums[i] : acc, 0);
};
