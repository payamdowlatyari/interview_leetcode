import { spiralOrder } from "./spiralOrder";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

describe("spiralOrder", () => {
  test("Example 1", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result1 = spiralOrder(matrix1);
    expect(result1).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("Example 2", () => {
    const matrix2 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const result2 = spiralOrder(matrix2);
    expect(result2).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});
