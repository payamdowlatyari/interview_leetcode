import { reverseStr } from "./reverseString";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

describe("Describe Cases", () => {
  test("Test 1", () => {
    const s1 = "abcdefg";
    const k1 = 2;
    const sum = reverseStr(s1, k1);
    expect(sum).toBe("bacdfeg");
  });

  test("Test 2", () => {
    const s2 = "abcd";
    const k2 = 2;
    const sum = reverseStr(s2, k2);
    expect(sum).toBe("bacd");
  });
});
