// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

/**
 * Finds all unique quadruplets in an array of integers that sum up to a given target.
 * This function avoids duplicate quadruplets by skipping over duplicate elements in the array.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 *
 * @example
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 *
 * Time complexity: O(n^3)
 * Space complexity: O(n)
 */
export function fourSum(nums, target) {
  const results = [];
  const n = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate for first number
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicate for second number
      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return results;
}
