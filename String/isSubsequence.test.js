import { isSubsequence } from "./isSubsequence.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

describe("isSubsequence", () => {
   test("Example 1", () => {
      expect(isSubsequence("abc", "ahbgdc")).toBe(true);
   });
   test("Example 2", () => {
      expect(isSubsequence("axc", "ahbgdc")).toBe(false);
   });
});