// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Constraints:
// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * Checks if a number is a power of four.
 * A number is a power of four if it can be expressed as 4 raised to the power of some integer x.
 *
 * @param {number} n
 * @return {boolean}
 *
 * @example
 * isPowerOfFour(16) // true
 * isPowerOfFour(5) // false
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function isPowerOfFour(n) {
  if (n == 0) return false;
  if (n == 1) return true;
  if (n % 4 != 0) return false;
  return isPowerOfFour(n / 4);
}
