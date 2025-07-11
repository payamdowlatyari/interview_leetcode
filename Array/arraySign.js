// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.

// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Constraints:

// 1 <= nums.length <= 1000
// -100 <= nums[i] <= 100

/**
 * Find the sign of the product of all elements in the array.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [1,2,3,4]
 * Output: 1
 * Explanation: The product of all values in the array is 24, and signFunc(24) = 1.
 *
 * Input: nums = [1,2,3,-4]
 * Output: -1
 * Explanation: The product of all values in the array is -24, and signFunc(-24) = -1.
 *
 * Input: nums = [-1,-2,-3,-4]
 * Output: 3
 * Explanation: The product of all values in the array is -24, and signFunc(-24) = -1.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function arraySign(nums) {
  if (nums.includes(0)) return 0;

  let product = 1;

  for (let i = 0; i < nums.length; i++) product *= nums[i];

  if (product < 0) return -1;

  return 1;
}
