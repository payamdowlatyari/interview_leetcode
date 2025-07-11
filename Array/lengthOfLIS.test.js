import { lengthOfLIS } from "./lengthOfLIS";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Explanation: The longest increasing subsequence is [0,1,2,3], therefore the length is 4.

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

describe("lengthOfLIS", () => {
  test("Example 1", () => {
    const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
    const result = lengthOfLIS(nums1);
    expect(result).toBe(4);
  });

  test("Example 2", () => {
    const nums2 = [0, 1, 0, 3, 2, 3];
    const result = lengthOfLIS(nums2);
    expect(result).toBe(4);
  });

  test("Example 3", () => {
    const nums3 = [7, 7, 7, 7, 7, 7, 7];
    const result = lengthOfLIS(nums3);
    expect(result).toBe(1);
  });
});
