import { isPowerOfTwo } from "./isPowerOfTwo.js";

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:
    
// Input: n = 3
// Output: false

describe("isPowerOfTwo", () => {
    test("Example 1", () => {
        expect(isPowerOfTwo(1)).toBe(true);
    });
    test("Example 2", () => {
        expect(isPowerOfTwo(16)).toBe(true);
    });
    test("Example 3", () => {
        expect(isPowerOfTwo(3)).toBe(false);
    });
});