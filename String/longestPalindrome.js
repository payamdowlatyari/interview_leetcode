// Given a string s which consists of lowercase or uppercase letters, 
// return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.


/** 
 * Finds the length of the longest palindrome that can be built with the letters in the string.
 * A palindrome is a string that reads the same forwards and backwards.
 * The function counts the occurrences of each character and calculates the maximum length of a palindrome that can be formed.
 * The length of the longest palindrome is calculated by adding the counts of characters that appear an even number of times,
 * and adding one if there is at least one character that appears an odd number of times (to allow for a single character in the middle of the palindrome).
 * 
 * @example
 * longestPalindrome("abccccdd") => 7
 * longestPalindrome("a") => 1
 * longestPalindrome("abc") => 1
 * longestPalindrome("abccba") => 6
 * 
 * @param {string} s - The input string containing letters.
 * @return {number}
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function longestPalindrome(s) {
    const charCount = {};
    let length = 0;

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char in charCount) {
        if (charCount[char] % 2 === 0) {
            length += charCount[char];
        } else {
            length += charCount[char] - 1;
        }
    }

    if (length < s.length) {
        length++;
    }

    return length;
}