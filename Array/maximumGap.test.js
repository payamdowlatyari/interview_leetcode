import { maximumGap } from "./maximumGap";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

describe("maximumGap", () => {
  test("Example 1", () => {
    expect(maximumGap([3, 6, 9, 1])).toBe(3);
  });

  test("Example 2", () => {
    expect(maximumGap([10])).toBe(0);
  });
});
