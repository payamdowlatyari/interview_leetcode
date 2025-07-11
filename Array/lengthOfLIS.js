// Given an integer array nums, return the length of the
// longest strictly increasing subsequence.

// Constraints:
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm
// that runs in O(n log(n)) time complexity?

/**
 * Calculates the length of the longest strictly increasing subsequence.
 *
 * @param {number[]} nums
 * @return {number}
 * 
 * @example
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 * 
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 * Explanation: The longest increasing subsequence is [0,1,2,3], therefore the length is 4.
 * 
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 * Explanation: The longest increasing subsequence is [7], therefore the length is 1.
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
export function lengthOfLIS(nums) {
  let dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
