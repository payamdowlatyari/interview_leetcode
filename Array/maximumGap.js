// Given an integer array nums, return the maximum difference between two successive elements in its sorted form.
// If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

/**
 * Given an integer array nums, return the maximum difference between two successive elements in its sorted form.
 * If the array contains less than two elements, return 0.
 *
 * The algorithm runs in linear time and uses linear extra space.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
 *
 * Input: nums = [10]
 * Output: 0
 * Explanation: The array contains less than two elements, therefore return 0.
 *
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */
export const maximumGap = (nums) => {
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] - nums[i - 1]);
  }
  return max;
};
