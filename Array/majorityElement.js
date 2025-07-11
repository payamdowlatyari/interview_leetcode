// Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * Finds the majority element in an array.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Time complexity: O(n log n) due to sorting
 * Space complexity: O(1) if we ignore the space used by the sorting algorithm
 */
export function majorityElement(nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
}
