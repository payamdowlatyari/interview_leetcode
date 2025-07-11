import { minSubsequence } from "./minSubsequence";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: nums = [4,3,10,9,8]
// Output: [10,9]
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly
// greater than the sum of elements not included. However, the subsequence [10,9] has the maximum total sum of its elements.

// Example 2:

// Input: nums = [4,4,7,6,7]
// Output: [7,7,6]
// Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater
// than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions.
// Note the subsequence has to be returned in non-increasing order.

describe("minSubsequence", () => {
  test("Example 1", () => {
    const input = [4, 3, 10, 9, 8];
    const output = [10, 9];
    expect(minSubsequence(input)).toEqual(output);
  });

  test("Example 2", () => {
    const input = [4, 4, 7, 6, 7];
    const output = [7, 7, 6];
    expect(minSubsequence(input)).toEqual(output);
  });
});
