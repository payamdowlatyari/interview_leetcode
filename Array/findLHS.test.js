import { findLHS } from "./findLHS.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 2

// Example 3:
// Input: nums = [1,1,1,1]
// Output: 0

describe("findLHS", () => {
    test("Example 1", () => {
        expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
    });
    test("Example 2", () => {
        expect(findLHS([1, 2, 3, 4])).toBe(2);
    });
    test("Example 3", () => {
        expect(findLHS([1, 1, 1, 1])).toBe(0);
    });
});