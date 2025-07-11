// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Constraints:
// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * Check if a number is a power of three.
 * @description This function checks if the given number n is a power of three.
 * It returns true if n is a power of three, otherwise it returns false.
 * A number is a power of three if it can be expressed as 3 raised to the power of some integer x.
 *
 * @param {number} n
 * @return {boolean}
 *
 * @example
 * isPowerOfThree(27) // true
 * isPowerOfThree(0) // false
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function isPowerOfThree(n) {
  if (n == 0) return false;
  if (n == 1) return true;
  if (n % 3 != 0) return false;
  return isPowerOfThree(n / 3);
}
