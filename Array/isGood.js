// You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].
// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once,
// plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].
// Return true if the given array is good, otherwise return false.
// Note: A permutation of integers represents an arrangement of these numbers.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= num[i] <= 200

/**
 * Checks if the given array is a "good" array.
 *
 * @param {number[]} nums
 * @return {boolean}
 * 
 * @example
 * Input: nums = [1,2,3,3]
 * Output: true
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function isGood(nums) {
  const max = Math.max(...nums);

  const base = [];
  for (let i = 1; i <= max; i++) {
    base.push(i);
  }
  base.push(max);

  return JSON.stringify(nums.sort((a, b) => a - b)) === JSON.stringify(base);
}
