// Next Permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of
// arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
// More formally, if all the permutations of the array are sorted in one container according to their lexicographical order,
// then the next permutation of that array is the permutation that follows it in the sorted container.
// If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

/**
 * Reverses the sub-array of nums starting from index 'start' to the end of the array.
 *
 * @param {number[]} nums - The array to be modified.
 * @param {number} start - The starting index from which to reverse the sub-array.
 * @returns {void} - This function does not return anything. It modifies the input array in-place.
 *
 * @example
 * Input: nums = [1,2,3]
 * Output: [3,2,1]
 *
 * Input: nums = [3,2,1]
 * Output: [1,2,3]
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function reverse(nums, start) {
  let end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

/**
 * Generates the next permutation of the given array of integers.
 * This function modifies the input array in-place to represent the next permutation.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * @example
 * Input: nums = [1,2,3]
 * Output: [1,3,2]
 *
 * Input: nums = [3,2,1]
 * Output: [1,2,3]
 *
 * Input: nums = [1,1,5]
 * Output: [1,5,1]
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  reverse(nums, i + 1);
  return nums;
}
