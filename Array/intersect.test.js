import { intersect } from "./intersect";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

describe("Describe Cases", () => {
  test("Test 1", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const sum = intersect(nums1, nums2);
    expect(sum).toEqual([2, 2]);
  });

  test("Test 2", () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const sum = intersect(nums1, nums2);
    expect(sum).toEqual([4, 9]);
  });
});
