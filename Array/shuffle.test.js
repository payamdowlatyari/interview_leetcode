import { shuffle } from "./shuffle";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

describe("shuffle", () => {
  test("Example 1", () => {
    const input = [2, 5, 1, 3, 4, 7];
    const n = 3;
    const output = [2, 3, 5, 4, 1, 7];
    expect(shuffle(input, n)).toEqual(output);
  });

  test("Example 2", () => {
    const input = [1, 2, 3, 4, 4, 3, 2, 1];
    const n = 4;
    const output = [1, 4, 2, 3, 3, 2, 4, 1];
    expect(shuffle(input, n)).toEqual(output);
  });

  test("Example 3", () => {
    const input = [1, 1, 2, 2];
    const n = 2;
    const output = [1, 2, 1, 2];
    expect(shuffle(input, n)).toEqual(output);
  });
});
