// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
 
// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

/**
 * Merges two strings by alternating their characters.
 * If one string is longer, the remaining characters are appended at the end.
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function mergeAlternately (word1, word2) {
    
    const lMin = Math.min(word1.length, word2.length);
    const result = new Array(lMin).fill(0).map((_, i) => word1[i] + word2[i]).join('');
    
    return result + (word1.length > word2.length ? word1.slice(lMin) : word2.slice(lMin));
};
