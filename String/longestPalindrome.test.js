import { longestPalindrome } from "./longestPalindrome";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Example 3:

// Input: s = "abc"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.


// Example 4:

// Input: s = "abccba"
// Output: 6
// Explanation: One longest palindrome that can be built is "abcba", whose length is 6.

describe("longestPalindrome", () => {
    test("Example 1", () => {
        expect(longestPalindrome("abccccdd")).toBe(7);
    });
    test("Example 2", () => {
        expect(longestPalindrome("a")).toBe(1);
    });
    test("Example 3", () => {
        expect(longestPalindrome("abc")).toBe(1);
    });
    test("Example 4", () => {
        expect(longestPalindrome("abccba")).toBe(6);
    });
    test("Empty string", () => {
        expect(longestPalindrome("")).toBe(0);
    });
})