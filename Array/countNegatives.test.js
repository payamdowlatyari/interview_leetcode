import { countNegatives } from "./countNegatives";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

describe("Describe Cases", () => {
  test("Test 1", () => {
    const grid1 = [
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ];
    const sum = countNegatives(grid1);
    expect(sum).toBe(8);
  });

  test("Test 2", () => {
    const grid2 = [
      [3, 2],
      [1, 0],
    ];
    const sum = countNegatives(grid2);
    expect(sum).toBe(0);
  });
});
