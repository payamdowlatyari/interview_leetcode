import { reverseVowels } from "./reverseVowels";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

describe("reverseVowels", () => {
  test("Example 1", () => {
    expect(reverseVowels("hello")).toBe("holle");
  });
  test("Example 2", () => {
    expect(reverseVowels("leetcode")).toBe("leotcede");
  });
});
