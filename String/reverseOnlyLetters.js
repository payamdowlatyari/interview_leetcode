// Reverse Only Letters

// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.
 
// Constraints:
// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

/**
 * Reverses only the letters in the string while keeping non-letter characters in their original positions.
 * 
 * @param {string} s
 * @return {string}
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function reverseOnlyLetters(s) {
    
    const letterRegex = /[A-Za-z]/;

    let reversed = s.split('').reverse().join('')

    let reversedOnlyLetters = ''

    for (let i = 0; i < s.length; i++) { 
        if (letterRegex.test(reversed[i])) 
            reversedOnlyLetters += reversed[i]
    }

    for (let j = 0; j < s.length; j++) { 
        if (!letterRegex.test(s[j])) 
            reversedOnlyLetters = reversedOnlyLetters.slice(0, j) + s[j] + reversedOnlyLetters.slice(j)
    }

   return reversedOnlyLetters
};