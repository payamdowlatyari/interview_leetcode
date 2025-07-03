import { backspaceCompare } from "./backspaceCompare.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

describe("backspaceCompare", () => {
    test("Example 1", () => {
        expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    });
    test("Example 2", () => {
        expect(backspaceCompare("ab##", "c#d#")).toBe(true);
    });
    test("Example 3", () => {
        expect(backspaceCompare("a#c", "b")).toBe(false);
    });
});