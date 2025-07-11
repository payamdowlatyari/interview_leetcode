import { isPalindrome } from "./isPalindrome";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// -------------------
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// -------------------
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// -------------------
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

describe("isPalindrome", () => {
  test("Example 1", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("Example 2", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  test("Example 3", () => {
    expect(isPalindrome(" ")).toBe(true);
  });
});
