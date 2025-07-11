// Given an integer array nums, find the
// subarray with the largest sum, and return its sum.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another
// solution using the divide and conquer approach, which is more subtle.

/**
 * Finds the contiguous subarray with the largest sum.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function maxSubArray(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    nums[i] = Math.max(num, num + nums[i - 1]);
    max = Math.max(max, nums[i]);
  }
  return max;
}
