import { addDigits } from "./addDigits";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:

// Input: num = 0
// Output: 0

describe("addDigits", () => {
  test("Example 1", () => {
    expect(addDigits(38)).toBe(2);
  });
  test("Example 2", () => {
    expect(addDigits(0)).toBe(0);
  });
});
