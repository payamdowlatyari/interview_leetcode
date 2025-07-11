// Given a positive integer num represented as a string,
// return the integer num without trailing zeros as a string.

// Constraints:

// 1 <= num.length <= 1000
// num consists of only digits.
// num doesn't have any leading zeros.

/**
 * Removes trailing zeros from a positive integer represented as a string.
 *
 * @param {string} num
 * @return {string}
 *
 * @example
 * Input: num = "51230100"
 * Output: "512301"
 *
 * Input: num = "123"
 * Output: "123"
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function removeTrailingZeros(num) {
  let i = num.length - 1;

  while (i > 0) {
    if (num[i] != "0") break;
    num = num.slice(0, i);
    i--;
  }

  return num;
}
