import { largestNumber } from "./largestNumber";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: nums = [10,2]
// Output: "210"

// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

describe("largestNumber", () => {
  test("Example 1", () => {
    const result = largestNumber([10, 2]);
    expect(result).toBe("210");
  });

  test("Example 2", () => {
    const result = largestNumber([3, 30, 34, 5, 9]);
    expect(result).toBe("9534330");
  });

  test("Example 3", () => {
    const result = largestNumber([1, 20, 23, 4]);
    expect(result).toBe("423201");
  });

  test("Example 4", () => {
    const result = largestNumber([0, 0]);
    expect(result).toBe("0");
  });
});
