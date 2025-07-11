/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 *
 * Constraints:
 *
 * 1 <= n <= 500
 * nums.length == 2n
 * 1 <= nums[i] <= 10^3
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 *
 * @example
 * Input: nums = [2,5,1,3], n = 2
 * Output: [2,1,5,3]
 * Explanation: Since x1=2, x2=5, y1=1, y2=3 then the answer is [2,1,5,3].
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function shuffle(nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }
  return res;
}
