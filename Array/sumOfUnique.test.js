import { sumOfUnique } from "./sumOfUnique";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.

// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

describe("sumOfUnique", () => {
  test("Example 1", () => {
    const input = [1, 2, 3, 2];
    const output = 4;
    expect(sumOfUnique(input)).toBe(output);
  });

  test("Example 2", () => {
    const input = [1, 1, 1, 1, 1];
    const output = 0;
    expect(sumOfUnique(input)).toBe(output);
  });

  test("Example 3", () => {
    const input = [1, 2, 3, 4, 5];
    const output = 15;
    expect(sumOfUnique(input)).toBe(output);
  });
});
