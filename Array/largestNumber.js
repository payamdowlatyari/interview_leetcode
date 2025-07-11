// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// Since the result may be very large, so you need to return a string instead of an integer.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

/**
 * Finds the largest number that can be formed by arranging a list of non-negative integers.
 * The function converts the integers to strings, sorts them based on a custom comparator,
 * and then joins the sorted strings to form the largest number.
 *
 * @param {number[]} nums
 * @return {string}
 * 
 * @example
 * Input: nums = [10,2]
 * Output: "210"
 * 
 * Input: nums = [3,30,34,5,9]
 * Output: "9534330"
 *
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */
export function largestNumber(nums) {
  // Convert numbers to strings for comparison
  const strNums = nums.map((num) => num.toString());

  // Sort the numbers based on the custom comparator
  strNums.sort((a, b) => (b + a).localeCompare(a + b));

  // If the largest number is '0', return '0'
  if (strNums[0] === "0") {
    return "0";
  }

  // Join the sorted numbers to form the largest number
  return strNums.join("");
}
