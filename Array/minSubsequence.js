// Given the array nums, obtain a subsequence of the array whose sum of elements is
// strictly greater than the sum of the non included elements in such subsequence.
// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions,
// return the subsequence with the maximum total sum of all its elements.
// A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 100

/** * Returns a subsequence of the given array such that the sum of its elements is strictly greater than the sum of the non-included elements.
 * The subsequence is returned in non-increasing order and has the minimum size possible.
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number[]} - The resulting subsequence.
 *
 * @example
 * Input: nums = [4,3,10,9,8]
 * Output: [10,9]
 * Explanation: The subsequence [10,9] has the minimal sum of its elements.
 *
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */
export function minSubsequence(nums) {
  // Sort the array in non-increasing order
  nums.sort((a, b) => b - a);

  const result = [];
  let totalSum = 0;
  let subsequenceSum = 0;

  // Calculate the total sum of the array
  for (const num of nums) {
    totalSum += num;
  }

  // Iterate through the sorted array and build the subsequence
  for (const num of nums) {
    subsequenceSum += num;
    result.push(num);

    // Check if the subsequence sum is greater than the remaining sum
    if (subsequenceSum > totalSum - subsequenceSum) {
      break;
    }
  }

  return result;
}
