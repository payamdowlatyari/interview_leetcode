// Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Constraints:
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

/**
 * Checks the greatest common divisor of two strings.
 *
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * @example
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const length = gcd(str1.length, str2.length);

  return str1.slice(0, length);
}
