// Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence
// while still preserving whitespace and initial word order.

// Constraints:
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * Reverses the order of characters in each word within a sentence while preserving whitespace and initial word order.
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

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }

  return words.join(" ");
}
