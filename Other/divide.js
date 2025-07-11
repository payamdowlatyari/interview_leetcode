// Given two integers dividend and divisor, divide two integers
// without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part.
// For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store
// integers within the 32-bit signed integer range: [−231, 231 − 1].
// For this problem, if the quotient is strictly greater than 231 - 1,
// then return 231 - 1, and if the quotient is strictly less than -231,
// then return -231.

// Constraints:

// -2^31 <= dividend, divisor <= 2^31 - 1
// divisor != 0

/**
 * Validates the number to be between -2^31 and 2^31 - 1
 *
 * @param {number} q
 * @return {number}
 */
const valid = (q) => {
  if (q > 2147483647) return 2147483647;
  if (q < -2147483648) return 2147483647;
  return q;
};

/**
 * Divides two integers without using multiplication, division, or mod operator.
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 *
 * @example
 * Input: dividend = 10, divisor = 3
 * Output: 3
 *
 * Input: dividend = 7, divisor = -3
 * Output: -2
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function divide(dividend, divisor) {
  let i = 0;
  let x = 1;

  if (dividend > 0 && divisor > 0) {
    x = 1;
  } else if (dividend < 0 && divisor < 0) {
    x = 1;
  } else if (dividend < 0) {
    x = -1;
  } else {
    x = -1;
  }

  let divd = Math.abs(dividend);
  let divs = Math.abs(divisor);

  if (divs == divd) return x;

  if (divs == 1) return valid(divd * x);

  while (divs <= divd) {
    divd -= divs;
    i++;
  }

  if (i == 0) return 0;
  return valid(i * x);
}
