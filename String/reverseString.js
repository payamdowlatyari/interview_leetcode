// Reverse String II

// Given a string s and an integer k, reverse the first k characters
// for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and leave the other as original.

// Constraints:
// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

/**
 * Reverses the first k characters for every 2k characters in the string s.
 * If there are fewer than k characters left, reverse all of them.
 * If there are less than 2k but greater than or equal to k characters,
 * then reverse the first k characters and leave the rest as is.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 *
 * @example
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function reverseStr(s, k) {
  if (s.length < k) return s.split("").reverse().join("");
  if (s.length >= k && s.length < k * 2)
    return s.slice(0, k).split("").reverse().join("") + s.slice(k);

  let tempStr = s.slice(0, k).split("").reverse().join("") + s.slice(k, k * 2);
  return tempStr + reverseStr(s.slice(k * 2), k);
}
