// Given two binary strings a and b, return their sum as a binary string.

// Constraints:

// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * Recursively adds two binary strings and a carry bit together.
 *
 * If the sum of the two bits plus the carry bit is 2, then the result is 0 and the carry bit is 1.
 * If the sum of the two bits plus the carry bit is 3, then the result is 1 and the carry bit is 1.
 * If the sum of the two bits plus the carry bit is 1, then the result is 1 and the carry bit is 0.
 * If the sum of the two bits plus the carry bit is 0, then the result is 0 and the carry bit is 0.
 *
 * @param {string} a - a binary string
 * @param {string} b - a binary string
 * @param {number} s - the carry bit (0 or 1)
 * @return {string} the sum of the two binary strings and the carry bit
 * as a binary string
 * 
 * @example
 * addOneDigit('10', '10', 0) // '100'
 * addOneDigit('10', '10', 1) // '11'
 * addOneDigit('10', '10', 2) // '1'
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
const addOneDigit = (a, b, s) => {
  let sum = 0;
  let r = 0;

  if (a.length >= 1 && b.length >= 1)
    sum = Number(a[a.length - 1]) + Number(b[b.length - 1]) + Number(s);

  if (sum == 2) {
    r = 1;
    sum = 0;
  }

  if (sum == 3) {
    r = 1;
    sum = 1;
  }

  if (a.length == 1 && b.length == 1) {
    if (r == 1) sum = String(r) + String(sum);

    return String(sum);
  }
  return (
    String(addOneDigit(a.slice(0, a.length - 1), b.slice(0, b.length - 1), r)) +
    String(sum)
  );
};

/**
 * Adds two binary strings and returns the sum as a binary string.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * @example
 * addBinary('1010', '1011') // '10101'
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function addBinary(a, b) {
  if (a.length > b.length) {
    let n = a.length - b.length;

    while (n > 0) {
      b = "0" + b;
      n--;
    }
  }

  if (a.length < b.length) {
    let m = b.length - a.length;

    while (m > 0) {
      a = "0" + a;
      m--;
    }
  }

  return addOneDigit(a, b, 0);
}
