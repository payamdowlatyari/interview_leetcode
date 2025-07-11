// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

/**
 * Finds the smallest missing positive integer in an array.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [1,2,0]
 * Output: 3
 *
 * Input: nums = [3,4,-1,1]
 * Output: 2
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function firstMissingPositive(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
