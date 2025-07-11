import { isPowerOfFour } from "./isPowerOfFour";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true

describe("isPowerOfFour", () => {
  test("Example 1", () => {
    expect(isPowerOfFour(16)).toBe(true);
  });
  test("Example 2", () => {
    expect(isPowerOfFour(5)).toBe(false);
  });
  test("Example 3", () => {
    expect(isPowerOfFour(1)).toBe(true);
  });
});
