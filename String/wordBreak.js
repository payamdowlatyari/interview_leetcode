// Given a string s and a dictionary of strings wordDict, return true if s can be segmented 
// into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * Checks if a given string can be segmented into a space-separated sequence of one or more dictionary words.
 * 
 * @param {string} s - The string to be segmented.
 * @param {string[]} wordDict - The dictionary of words.
 * @return {boolean} - Returns true if the string can be segmented, false otherwise.
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
export const wordBreak = (s, wordDict) => {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};