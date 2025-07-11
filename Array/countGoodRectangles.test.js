import { countGoodRectangles } from "./countGoodRectangles";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
// Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.

// Example 2:

// Input: rectangles = [[2,3],[3,7],[4,3],[3,7]]
// Output: 3

describe("countGoodRectangles", () => {
  test("Example 1", () => {
    const input = [
      [5, 8],
      [3, 9],
      [5, 12],
      [16, 5],
    ];
    const output = 3;
    expect(countGoodRectangles(input)).toEqual(output);
  });

  test("Example 2", () => {
    const input = [
      [2, 3],
      [3, 7],
      [4, 3],
      [3, 7],
    ];
    const output = 3;
    expect(countGoodRectangles(input)).toEqual(output);
  });
});
