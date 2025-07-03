import { isAnagram } from "./anagram.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

describe("isAnagram", () => {
    test("Example 1", () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
    });
    test("Example 2", () => {
        expect(isAnagram("rat", "car")).toBe(false);
    });
});