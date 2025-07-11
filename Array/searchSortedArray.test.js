import { searchSortedArray } from "./searchSortedArray";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Example 2:
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

describe("searchSortedArray", () => {
  test("Test 1", () => {
    const nums1 = [2, 5, 6, 0, 0, 1, 2];
    const target1 = 0;
    const sum = searchSortedArray(nums1, target1);
    expect(sum).toBe(true);
  });

  test("Test 2", () => {
    const nums2 = [2, 5, 6, 0, 0, 1, 2];
    const target2 = 3;
    const sum = searchSortedArray(nums2, target2);
    expect(sum).toBe(false);
  });
});
