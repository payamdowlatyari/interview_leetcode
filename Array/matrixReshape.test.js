import { describe, test, expect } from "@jest/globals";
import { matrixReshape } from "./matrixReshape";

// Example 1:

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

describe("matrixReshape", () => {
  test("Example 1", () => {
    const mat1 = [
      [1, 2],
      [3, 4],
    ];
    const r1 = 1;
    const c1 = 4;
    const result1 = matrixReshape(mat1, r1, c1);
    expect(result1).toEqual([[1, 2, 3, 4]]);
  });

  test("Example 2", () => {
    const mat2 = [
      [1, 2],
      [3, 4],
    ];
    const r2 = 2;
    const c2 = 4;
    const result2 = matrixReshape(mat2, r2, c2);
    expect(result2).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
