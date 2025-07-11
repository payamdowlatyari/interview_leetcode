import { decode } from "./decode";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

// Example 2:

// Input: encoded = [6,2,7,3], first = 4
// Output: [4,2,0,7,4]

describe("decode", () => {
  test("Example 1", () => {
    const input = [1, 2, 3];
    const first = 1;
    const output = [1, 0, 2, 1];
    expect(decode(input, first)).toEqual(output);
  });

  test("Example 2", () => {
    const input = [6, 2, 7, 3];
    const first = 4;
    const output = [4, 2, 0, 7, 4];
    expect(decode(input, first)).toEqual(output);
  });
});
