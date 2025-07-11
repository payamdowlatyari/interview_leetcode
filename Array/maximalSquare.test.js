import { maximalSquare } from "./maximalSquare";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

// Example 2:

// Input: matrix = [["0","1"],["1","0"]]
// Output: 1

// Example 3:

// Input: matrix = [["0"]]
// Output: 0

describe("maximalSquare", () => {
  test("Example 1", () => {
    expect(
      maximalSquare([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ]),
    ).toBe(4);
  });

  test("Example 2", () => {
    expect(
      maximalSquare([
        ["0", "1"],
        ["1", "0"],
      ]),
    ).toBe(1);
  });

  test("Example 3", () => {
    expect(maximalSquare([["0"]])).toBe(0);
  });
});
