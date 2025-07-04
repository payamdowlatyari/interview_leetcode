import { divide } from "./divide";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.

describe("divide", () => {
    test("Example 1", () => {
        expect(divide(10, 3)).toBe(3);
    });
    test("Example 2", () => {
        expect(divide(7, -3)).toBe(-2);
    });
});