// Array Partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
// such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 
// Constraints:
// 1 <= n <= 104
// nums.length == 2 * n
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
export function arrayPairSum(nums) {
    
    let maxSum = 0
    let sorted = nums.sort((a, b) => {return a - b})

    for (let i = 0; i < sorted.length - 1; i += 2) {
        maxSum += (Math.min(sorted[i], sorted[i + 1]))
    }

    return maxSum
};