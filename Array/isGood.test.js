import { isGood } from "./isGood";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [2, 1, 3]
// Output: false
// Explanation: Since the maximum element of the array is 3,
// the only candidate n for which this array could be a permutation
// of base[n], is n = 3. However, base[3] has four elements but array nums has three.
// Therefore, it can not be a permutation of base[3] = [1, 2, 3, 3].
// So the answer is false.

// Example 2:

// Input: nums = [1, 3, 3, 2]
// Output: true
// Explanation: Since the maximum element of the array is 3,
// the only candidate n for which this array could be a permutation
// of base[n], is n = 3. It can be seen that nums is a permutation of base[3] = [1, 2, 3, 3]
// (by swapping the second and fourth elements in nums, we reach base[3]).
// Therefore, the answer is true.

// Example 3:

// Input: nums = [1, 1]
// Output: true
// Explanation: Since the maximum element of the array is 1,
// the only candidate n for which this array could be a permutation
// of base[n], is n = 1. It can be seen that nums is a permutation of base[1] = [1, 1].
// Therefore, the answer is true.

// Example 4:

// Input: nums = [3, 4, 4, 1, 2, 1]
// Output: false
// Explanation: Since the maximum element of the array is 4,
// the only candidate n for which this array could be a permutation
// of base[n], is n = 4. However, base[4] has five elements but array nums has six.
// Therefore, it can not be a permutation of base[4] = [1, 2, 3, 4, 4].
// So the answer is false.

describe("Describe Cases", () => {
  test("Test 1", () => {
    const nums1 = [2, 1, 3];
    const sum = isGood(nums1);
    expect(sum).toBe(false);
  });

  test("Test 2", () => {
    const nums2 = [1, 3, 3, 2];
    const sum = isGood(nums2);
    expect(sum).toBe(true);
  });

  test("Test 3", () => {
    const nums3 = [1, 1];
    const sum = isGood(nums3);
    expect(sum).toBe(true);
  });

  test("Test 4", () => {
    const nums4 = [3, 4, 4, 1, 2, 1];
    const sum = isGood(nums4);
    expect(sum).toBe(false);
  });
});
