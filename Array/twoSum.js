// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * Finds two indices in an array such that the elements at those indices sum to a given target.
 * This function uses a hash map to store previously visited numbers and their indices,
 * allowing for efficient lookup of the complement (target - current number).
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @example
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
