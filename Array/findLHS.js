// Longest Harmonious Subsequence

// We define a harmonious array as an array where the difference between
// its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious
// subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by
// deleting some or no elements without changing the order of the remaining elements.

// Constraints:
// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

/**
 * Finds the length of the longest harmonious subsequence in an array.
 *
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * Input: nums = [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 *
 * Input: nums = [1,2,3,4]
 * Output: 2
 * Explanation: The longest harmonious subsequence is [2,3].
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function findLHS(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let i = 0,
    j = 1;
  let max = 0;

  while (i < sortedNums.length) {
    while (Math.abs(sortedNums[j] - sortedNums[i]) >= 0) {
      if (Math.abs(sortedNums[j] - sortedNums[i]) === 1) {
        if (j - i + 1 > max) max = j - i + 1;
      }
      j++;
    }
    i++;
    j = i + 1;
  }
  return max;
}
