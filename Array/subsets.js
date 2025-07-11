// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// A subset of an array is a selection of elements (possibly none) of the array.
//
// Constraints:
//
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * Finds all possible subsets of an array.
 * This function uses a backtracking approach to generate all possible combinations of subsets.
 *
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * @example
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Time complexity: O(2^n)
 * Space complexity: O(n)
 */
export function subsets(nums) {
  const result = [];
  const subset = [];
  /**
   * Recursively generates all subsets starting from a specific index.
   *
   * This function explores all possible combinations of the elements in the array
   * by including or excluding each element, and adds each valid subset to the result.
   *
   * @param {number} startIndex - The index to start generating subsets from.
   */
  const backtrack = (startIndex) => {
    result.push([...subset]);
    for (let i = startIndex; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1);
      subset.pop();
    }
  };
  backtrack(0);
  return result;
}
