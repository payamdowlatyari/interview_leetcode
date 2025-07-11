// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Constraints:

// 1 <= nums.length <= 10^5
// -2^31 <= nums[i] <= 2^31 - 1
// 0 <= k <= 10^5

// Follow up:

// Try to come up with as many solutions as you can.
// There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/** * Reverses the sub-array of nums from index 'start' to index 'end'.
 *
 * @param {number[]} nums - The array to be modified.
 * @param {number} start - The starting index of the sub-array.
 * @param {number} end - The ending index of the sub-array.
 * @returns {void} - This function does not return anything. It modifies the input array in-place.
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

/**
 * Rotates the array to the right by k steps.
 * This function modifies the input array in-place to represent the rotated array.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * @example
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function rotateArray(nums, k) {
  k = k % nums.length;
  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining elements
  reverse(nums, k, nums.length - 1);
}
