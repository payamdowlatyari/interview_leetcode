import { dominantIndex } from "./dominantIndex";
import { describe, expect, it } from "@jest/globals";

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

// Example 3:

// Input: nums = [-1,-2,-3,-4]
// Output: -1
// Explanation: There is no value that is at least twice as big as any other value, so we return -1.

describe("dominantIndex", () => {
  it("should return the index of the dominant element", () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1);
  });

  it("should return -1 if there is no dominant element", () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
  });

  it("should handle negative numbers", () => {
    expect(dominantIndex([-1, -2, -3, -4])).toBe(-1);
  });
});
