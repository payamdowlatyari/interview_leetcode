// Given an integer array nums and an integer k, return true if there are two distinct
// indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * Check if there are duplicate elements within a given range.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * @example
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function containsDup(nums, k) {
  if (k > nums.length) k = nums.length;

  for (let i = 0; i < nums.length; i++) {
    let j = 0;

    if (i < nums.length) j = i + 1;

    while (j < nums.length) {
      if (nums[j] == nums[i] && Math.abs(i - j) <= k) return true;
      j++;
    }

    if (i > 0) j = i - 1;

    while (j > 0) {
      if (nums[j] == nums[i] && Math.abs(i - j) <= k) return true;
      j--;
    }
  }
  return false;
}
