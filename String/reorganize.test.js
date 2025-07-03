import { reorganizeString } from "./reorganize.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "aab"
// Output: "aba"

// Example 2:
// Input: s = "aaab"
// Output: ""

describe("reorganizeString", () => {
    test("Example 1", () => {
        expect(reorganizeString("aab")).toBe("aba");
    });
    test("Example 2", () => {
        expect(reorganizeString("aaab")).toBe("");
    });
});