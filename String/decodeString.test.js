import { decodeString } from "./decodeString";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
 
describe("decodeString", () => {
  test("Example 1", () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });
  test("Example 2", () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });
  test("Example 3", () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });
});