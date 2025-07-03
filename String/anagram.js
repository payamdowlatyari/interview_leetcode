// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: 
// What if the inputs contain Unicode characters? 
// How would you adapt your solution to such a case?

/**
 * Checks if two strings are anagrams of each other.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function isAnagram(s, t) {
    
    if (s.length != t.length) return false;

    for (let i = 0; i < s.length; i++){
        if (!t.includes(s[i])) {
            return false;
        }
        else {
            let n = t.indexOf(s[i]); 
            t = t.slice(0, n) + t.slice(n + 1, t.length);
        }
    } 

    return true;
};