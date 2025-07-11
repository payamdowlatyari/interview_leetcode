import { reverseWords } from "./reverseWords";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

describe("Reverse Words in a String", () => {
  test("Test 1", () => {
    const s1 = "the sky is blue";
    const result = reverseWords(s1);
    expect(result).toBe("blue is sky the");
  });

  test("Test 2", () => {
    const s2 = "  hello world  ";
    const result = reverseWords(s2);
    expect(result).toBe("world hello");
  });

  test("Test 3", () => {
    const s3 = "a good   example";
    const result = reverseWords(s3);
    expect(result).toBe("example good a");
  });
});
