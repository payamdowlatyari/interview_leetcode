// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character 
// while preserving the order of characters. No two characters may map to 
// the same character, but a character may map to itself.

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * Checks if two strings are isomorphic.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function isIsomorphic(s, t) {
    
    if (s.length != t.length) return false;

    let i = 0;

    while (i < s.length) {
            
            let j = i + 1;

            while (j < t.length) {
                
                if (t[j] == t[i] && s[j] != s[i]) return false;
                if (s[j] == s[i] && t[j] != t[i]) return false;


                j++
            }
        i++
    }

    return true;
};