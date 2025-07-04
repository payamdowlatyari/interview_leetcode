// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. 
// If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. 
// Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

/**
 * Converts a string to a 32-bit signed integer.
 * @param {string} s
 * @return {number}
 * Time complexity: O(n), where n is the length of the string.
 * Space complexity: O(1), as we use a constant amount of space.
 */
export function myAtoi(s) {
    s = s.trim(); // Remove leading and trailing whitespace
    if (s.length === 0) return 0; // If the string is empty, return 0

    let sign = 1; // Default sign is positive
    let index = 0; // Start index for reading characters
    const INT_MAX = 2 ** 31 - 1; // Maximum value for a 32-bit signed integer
    const INT_MIN = -(2 ** 31); // Minimum value for a 32-bit signed integer

    // Check for sign
    if (s[index] === '-') {
        sign = -1;
        index++;
    } else if (s[index] === '+') {
        index++;
    }

    let result = 0; // Initialize result

    // Read digits and convert to integer
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        const digit = s[index] - '0'; // Convert character to digit
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN; // Handle overflow
        }
        result = result * 10 + digit; // Update result
        index++;
    }

    return result * sign; // Apply sign and return result
}