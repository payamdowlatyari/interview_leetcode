import { isFascinating } from "./isFascinating.js";

// Example 1:

// Input: n = 192
// Output: true
// Explanation: We concatenate the numbers n = 192 and 2 * n = 384 and 3 * n = 576. 
// The resulting number is 192384576. This number contains all the digits from 1 to 9 exactly once.

// Example 2:

// Input: n = 100
// Output: false
// Explanation: We concatenate the numbers n = 100 and 2 * n = 200 and 3 * n = 300. 
// The resulting number is 100200300. This number does not satisfy any of the conditions.

describe("isFascinating", () => {
    test("Example 1", () => {
        expect(isFascinating(192)).toBe(true);
    });
    test("Example 2", () => {
        expect(isFascinating(100)).toBe(false);
    });
});