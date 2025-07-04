import { search } from "./binarySearch";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

describe("search", () => {
    test("Example 1", () => {
        expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    });
    test("Example 2", () => {
        expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
    });
});