import { firstMissingPositive } from "./firstMissingPositive";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

describe("firstMissingPositive", () => {
  test("Example 1", () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
  });
  test("Example 2", () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  });
  test("Example 3", () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });
});
