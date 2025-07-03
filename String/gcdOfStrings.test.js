import { gcdOfStrings } from "./gcdOfStrings.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

describe("gcdOfStrings", () => {
    test("Example 1", () => {
        expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
    });
    test("Example 2", () => {
        expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
    });
    test("Example 3", () => {
        expect(gcdOfStrings("LEET", "CODE")).toBe("");
    });
});
