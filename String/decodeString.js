// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
// Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
// For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

/**
 * Decodes an encoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 *
 * @param {string} s - The encoded string.
 * @returns {string} The decoded string.
 * 
 * @example
 * decodeString("3[a]2[bc]") // "aaabcbc"
 * decodeString("3[a2[c]]") // "accaccacc"
 * decodeString("2[abc]3[cd]ef") // "abcabccdcdcdef"
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function decodeString(s) {
    const stack = [];
    let currentNum = 0;
    let currentString = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (/\d/.test(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === "[") {
            stack.push({ num: currentNum, str: currentString });
            currentNum = 0;
            currentString = "";
        } else if (char === "]") {
            const { num, str } = stack.pop();
            currentString = str + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }

    return currentString;
}