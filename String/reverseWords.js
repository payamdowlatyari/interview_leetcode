// Reverse Words in a String

// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.

// Constraints:
// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.

// Follow-up: If the string data type is mutable in your language,
// can you solve it in-place with O(1) extra space?

/**
 * Reverses the order of words in a given string.
 *
 * @param {string} s
 * @return {string}
 *
 * @example
 * reverseWords("the sky is blue") // "blue is sky the"
 * reverseWords("  hello world  ") // "world hello"
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function reverseWords(s) {
  let words = s.split(" ");

  let reversed = "";

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "") reversed += `${words[i]} `;
  }

  return reversed.trimEnd();
}
