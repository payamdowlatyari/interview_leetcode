import { numDecodings } from "./numDecodings";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "12"
// Output: 2
// Explanation:
// "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation:
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation:
// "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

describe("numDecodings", () => {
    test("Example 1", () => {
        expect(numDecodings("12")).toBe(2);
    });
    test("Example 2", () => {
        expect(numDecodings("226")).toBe(3);
    });
    test("Example 3", () => {
        expect(numDecodings("06")).toBe(0);
    });
});