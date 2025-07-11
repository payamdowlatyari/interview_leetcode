import { singleNumber } from "./singleNumber";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

describe("singleNumber", () => {
  test("Example 1", () => {
    const nums1 = [2, 2, 3, 2];
    const result1 = singleNumber(nums1);
    expect(result1).toBe(3);
  });

  test("Example 2", () => {
    const nums2 = [0, 1, 0, 1, 0, 1, 99];
    const result2 = singleNumber(nums2);
    expect(result2).toBe(99);
  });
});
