import { nextPermutation } from "./nextPermutation";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]

describe("nextPermutation", () => {
  test("Example 1", () => {
    const nums1 = [1, 2, 3];
    nextPermutation(nums1);
    expect(nums1).toEqual([1, 3, 2]);
  });

  test("Example 2", () => {
    const nums2 = [3, 2, 1];
    nextPermutation(nums2);
    expect(nums2).toEqual([1, 2, 3]);
  });

  test("Example 3", () => {
    const nums3 = [1, 1, 5];
    nextPermutation(nums3);
    expect(nums3).toEqual([1, 5, 1]);
  });
});
