import { isPowerOfThree } from "./isPowerOfThree";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

describe("isPowerOfThree", () => {
  test("Example 1", () => {
    expect(isPowerOfThree(27)).toBe(true);
  });
  test("Example 2", () => {
    expect(isPowerOfThree(0)).toBe(false);
  });
  test("Example 3", () => {
    expect(isPowerOfThree(-1)).toBe(false);
  });
});
