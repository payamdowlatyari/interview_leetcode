// Given two strings ransomNote and magazine, return true if ransomNote can 
// be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.
 
// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * Checks if ransomNote can be constructed from magazine.
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function canConstruct(ransomNote, magazine) {

    const map = {};
    for (let char of magazine) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    for (let char of ransomNote) {
        if (map[char] === undefined || map[char] === 0) {
            return false;
        }
        map[char]--;
    }

    return true;
};
