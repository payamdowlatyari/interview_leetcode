// Given an integer array nums, find a subarray
// that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

/**
 * Returns the maximum product of all subarrays in the given array.
 *
 * @param {number[]} nums
 * @return {number}
 * 
 * @example
 * maxProduct([2,3,-2,4]) // 6
 * maxProduct([-2,0,-1]) // 0
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function maxProduct(nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(nums[i], Math.max(max * nums[i], min * nums[i]));
    min = Math.min(nums[i], Math.min(temp * nums[i], min * nums[i]));
    result = Math.max(result, max);
  }
  return result;
}
