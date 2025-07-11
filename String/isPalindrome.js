// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Constraints:

// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.

/**
 * Checks if s is a palindrome.
 * * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * @param {string} s
 * @return {boolean}
 * 
 * @example
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Input: s = "race a car"
 * Output: false
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function isPalindrome(s) {
  let temp = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let rev_temp = temp.split("").reverse().join("");

  if (temp === rev_temp) return true;

  return false;
}
