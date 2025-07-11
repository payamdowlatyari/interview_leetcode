// Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * Finds the maximum average value of a contiguous subarray of length k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * @example
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75
 * Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * Input: nums = [5], k = 1
 * Output: 5.00000
 * Explanation: Maximum average is 5/1 = 5.00000
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function findMaxAverage(nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}
