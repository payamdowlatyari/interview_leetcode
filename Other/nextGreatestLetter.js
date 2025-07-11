// You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
// There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target.
// If such a character does not exist, return the first character in letters.

// Constraints:

// 2 <= letters.length <= 10^4
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

/**
 * Finds the smallest character in a sorted array of characters that is greater than the given target.
 *
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 *
 * @example
 * Input: letters = ["c","f","j"], target = "a"
 * Output: "c"
 *
 * Input: letters = ["c","f","j"], target = "c"
 * Output: "f"
 *
 * Input: letters = ["x","x","y","y"], target = "z"
 * Output: "x"
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function nextGreatestLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt(0) > target.charCodeAt(0)) return letters[i];
  }

  return letters[0];
}
