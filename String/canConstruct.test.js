import { canConstruct } from "./canConstruct";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

describe("canConstruct", () => {
    test("Example 1", () => {
        expect(canConstruct("a", "b")).toBe(false);
    });
    test("Example 2", () => {
        expect(canConstruct("aa", "ab")).toBe(false);
    });
    test("Example 3", () => {
        expect(canConstruct("aa", "aab")).toBe(true);
    });
});