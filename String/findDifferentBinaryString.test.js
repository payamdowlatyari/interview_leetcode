import { findDifferentBinaryString } from "./findDifferentBinaryString";
import { describe, test, expect } from "@jest/globals";



// Example 1:

// Input: nums = ["01","10"]
// Output: "11"
// Explanation: "11" does not appear in nums. "00" would also be correct.
// Example 2:

// Input: nums = ["00","01"]
// Output: "11"
// Explanation: "11" does not appear in nums. "10" would also be correct.
// Example 3:

// Input: nums = ["111","011","001"]
// Output: "101"
// Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 

describe("Describe Cases", () => {
  test("Test 1", () => {
    const nums1 = ["01", "10"];
    const sum = findDifferentBinaryString(nums1);
    const expected = ["11", "00"];
    expect(expected).toContain(sum);
  });

  test("Test 2", () => {
    const nums2 = ["00", "01"];
    const sum = findDifferentBinaryString(nums2);
    const expected = ["11", "10"];
    expect(expected).toContain(sum);
  });

  test("Test 3", () => {
    const nums3 = ["111", "011", "001"];
    const sum = findDifferentBinaryString(nums3);
    const expected = ["101", "000", "010", "100", "110"];
    expect(expected).toContain(sum);
  });
});