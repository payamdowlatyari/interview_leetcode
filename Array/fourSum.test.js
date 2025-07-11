import { fourSum } from "./fourSum";
import { describe, it, expect } from "@jest/globals";

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

describe("fourSum", () => {
  it("Example 1", () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ]);
  });
  it("Example 2", () => {
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
  });
});
