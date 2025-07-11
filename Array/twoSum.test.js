import { twoSum } from "./twoSum";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

describe("twoSum", () => {
  test("Example 1", () => {
    const nums1 = [2, 7, 11, 15];
    const target1 = 9;
    const result1 = twoSum(nums1, target1);
    expect(result1).toEqual([0, 1]);
  });

  test("Example 2", () => {
    const nums2 = [3, 2, 4];
    const target2 = 6;
    const result2 = twoSum(nums2, target2);
    expect(result2).toEqual([1, 2]);
  });

  test("Example 3", () => {
    const nums3 = [3, 3];
    const target3 = 6;
    const result3 = twoSum(nums3, target3);
    expect(result3).toEqual([0, 1]);
  });
});
