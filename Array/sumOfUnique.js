// You are given an integer array nums.
// The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * You are given an integer array nums.
 * The unique elements of an array are the elements that appear exactly once in the array.
 * Return the sum of all the unique elements of nums.
 *
 * @param {number[]} nums
 * @return {number}
 * 
 * @example
 * Input: nums = [1,2,3,2]
 * Output: 4
 * Explanation: The unique elements are [1,3], and the sum is 4.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function sumOfUnique(nums) {
  const numCount = new Map();
  for (const num of nums) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }
  let sum = 0;
  for (const [num, count] of numCount) {
    if (count === 1) {
      sum += num;
    }
  }
  return sum;
}
