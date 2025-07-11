// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 * Moves all zeroes in the array to the end while maintaining the order of non-zero elements.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * @example
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Explanation: After moving all zeroes to the end, the array becomes [1,3,12,0,0].
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
export function moveZeroes(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] != 0) {
          nums[i] = nums[j];
          nums[j] = 0;
          break;
        }
      }
    }
  }

  return nums;
}
