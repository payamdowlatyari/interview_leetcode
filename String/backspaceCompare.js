// Given two strings s and t, return true if they are equal
// when both are typed into empty text editors.
// '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

/**
 * Compares two strings to see if they are equal after backspacing.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * @example
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function backspaceCompare(s, t) {
  /**
   * Process a string to apply backspace characters.
   *
   * @param {string} str - The string to process.
   * @return {string} The processed string.
   *
   * This function iterates through the string and applies backspace characters.
   * If a character is a '#', it pops the last character of the result array.
   * If a character is not a '#', it pushes the character onto the result array.
   * Finally, it returns the result array joined into a string.
   */
  function processString(str) {
    const result = [];
    for (const char of str) {
      if (char === "#") {
        result.pop();
      } else {
        result.push(char);
      }
    }
    return result.join("");
  }

  return processString(s) === processString(t);
}
