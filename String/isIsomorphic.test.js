import { isIsomorphic } from "./isIsomorphic";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

describe("isIsomorphic", () => {
    test("Example 1", () => {
        expect(isIsomorphic("egg", "add")).toBe(true);
    });
    test("Example 2", () => {
        expect(isIsomorphic("foo", "bar")).toBe(false);
    });
    test("Example 3", () => {
        expect(isIsomorphic("paper", "title")).toBe(true);
    });
});