import { subsets } from "./subsets";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

describe("subsets", () => {
  test("Example 1", () => {
    const result = subsets([1, 2, 3]);
    expect(result.sort()).toEqual(
      [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].sort(),
    );
  });
  test("Example 2", () => {
    const result = subsets([0]);
    expect(result.sort()).toEqual([[], [0]].sort());
  });
});
