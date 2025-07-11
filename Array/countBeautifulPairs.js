// You are given a 0-indexed integer array nums.
// A pair of indices i, j where 0 <= i < j < nums.length is called beautiful
// if the first digit of nums[i] and the last digit of nums[j] are coprime.

// Return the total number of beautiful pairs in nums.

// Two integers x and y are coprime if there is no integer greater than 1 that divides both of them.
// In other words, x and y are coprime if gcd(x, y) == 1,
// where gcd(x, y) is the greatest common divisor of x and y.

// Constraints:

// 2 <= nums.length <= 100
// 1 <= nums[i] <= 9999
// nums[i] % 10 != 0

/**
 * Calculates the greatest common divisor (GCD) of two integers using the Euclidean algorithm.
 *
 * @param {number} x - The first integer.
 * @param {number} y - The second integer.
 * @return {number} - The greatest common divisor of x and y.
 * 
 * @example
 * Input: x = 6, y = 4
 * Output: 2
 *
 * Time complexity: O(log(min(x, y)))
 * Space complexity: O(1)
 */
const gcd = (x, y) => {
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};

/**
 * Counts the number of beautiful pairs in an array of integers.
 *
 * @param {number[]} nums
 * @return {number}
 * 
 * @example
 * Input: nums = [2,4,6,8]
 * Output: 2
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function countBeautifulPairs(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const firstDigit = parseInt(nums[i].toString()[0]);

    for (let j = i + 1; j < nums.length; j++) {
      const lastDigit = nums[j] % 10;

      if (gcd(firstDigit, lastDigit) === 1) {
        count++;
      }
    }
  }

  return count;
}
