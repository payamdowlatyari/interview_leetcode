import { findMaxAverage } from "./findMaxAverage";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Example 3:
// Input: nums = [4,0,4,3,3], k = 5
// Output: 2.80000

describe("Describe Cases", () => {
  test("Test 1", () => {
    const nums1 = [1, 12, -5, -6, 50, 3];
    const k1 = 4;
    const sum = findMaxAverage(nums1, k1);
    expect(sum).toBe(12.75);
  });

  test("Test 2", () => {
    const nums2 = [5];
    const k2 = 1;
    const sum = findMaxAverage(nums2, k2);
    expect(sum).toBe(5.0);
  });

  test("Test 3", () => {
    const nums3 = [4, 0, 4, 3, 3];
    const k3 = 5;
    const sum = findMaxAverage(nums3, k3);
    expect(sum).toBe(2.8);
  });
});
