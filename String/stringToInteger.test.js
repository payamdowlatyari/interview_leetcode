import { myAtoi } from "./stringToInteger";
import { describe, it, expect } from "@jest/globals";

// Example 1:
// Input: s = "42"
// Output: 42
// Explanation:
// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:
// Input: s = " -042"
// Output: -42
// Explanation:
// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:
// Input: s = "1337c0d3"
// Output: 1337
// Explanation:
// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:
// Input: s = "0-1"
// Output: 0
// Explanation:
// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:
// Input: s = "words and 987"
// Output: 0
// Explanation:
// Reading stops at the first non-digit character 'w'.

describe('String to Integer (atoi)', () => {

    it('should convert "42" to 42', () => {
        const result = myAtoi("42");
        expect(result).toBe(42);
    });

    it('should convert " -042" to -42', () => {
        const result = myAtoi(" -042");
        expect(result).toBe(-42);
    });

    it('should convert "1337c0d3" to 1337', () => {
        const result = myAtoi("1337c0d3");
        expect(result).toBe(1337);
    });

    it('should convert "0-1" to 0', () => {
        const result = myAtoi("0-1");
        expect(result).toBe(0);
    });

    it('should convert "words and 987" to 0', () => {
        const result = myAtoi("words and 987");
        expect(result).toBe(0);
    });

});