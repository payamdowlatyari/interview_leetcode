import { generate } from "./pascalTriangle";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

describe("Pascal Triangle", () => {
  test("Example 1", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
  test("Example 2", () => {
    expect(generate(1)).toEqual([[1]]);
  });
});
