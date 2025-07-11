// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u',
// and they can appear in both lower and upper cases, more than once.

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * Reverses the vowels in a given string.
 * This function iterates through the string to collect all vowels,
 * then constructs a new string with the vowels reversed while keeping the
 * positions of non-vowel characters unchanged.
 *
 * @example
 * reverseVowels('hello') // 'holle'
 * reverseVowels('leetcode') // 'leotcede'
 *
 * @param {string} s
 * @return {string}
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  const vowelIndices = [];
  const vowelChars = [];

  // Collect indices and characters of vowels
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelIndices.push(i);
      vowelChars.push(s[i]);
    }
  }

  // Reverse the collected vowels
  vowelChars.reverse();

  // Create a new array to build the result
  const result = s.split("");

  // Place the reversed vowels back into their original positions
  for (let i = 0; i < vowelIndices.length; i++) {
    result[vowelIndices[i]] = vowelChars[i];
  }

  return result.join("");
}
