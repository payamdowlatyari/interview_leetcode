import { allCombinations } from "./combinations";
import { describe, expect, test } from "@jest/globals";

// Example 1:
// Input: nums = [1, 2, 3]
// Output: [[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 2, 2], [1, 2, 3], [1, 3, 3], [2, 2, 2], [2, 2, 3], [2, 3, 3], [3, 3, 3]]

// Example 2:
// Input: nums = [0]
// Output: [[0]]

describe("allCombinations", () => {
  test("Test 1", () => {
    const nums1 = [1, 2, 3];
    const sum = allCombinations(nums1);
    expect(sum).toEqual([
      [1, 1, 1],
      [1, 1, 2],
      [1, 1, 3],
      [1, 2, 2],
      [1, 2, 3],
      [1, 3, 3],
      [2, 2, 2],
      [2, 2, 3],
      [2, 3, 3],
      [3, 3, 3],
    ]);
  });

  test("Test 2", () => {
    const nums2 = [0];
    const sum = allCombinations(nums2);
    expect(sum).toEqual([[0]]);
  });
});
