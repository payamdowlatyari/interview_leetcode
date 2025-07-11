import { diffWaysToCompute } from "./diffWaysToCompute";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0
// (2-(1-1)) = 2

// Example 2:

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

describe("diffWaysToCompute", () => {
  test("Example 1", () => {
    const expression = "2-1-1";
    console.log(diffWaysToCompute(expression));
    expect(diffWaysToCompute(expression).sort((a, b) => a - b)).toEqual([0, 2]);
  });
  test("Example 2", () => {
    const expression = "2*3-4*5";
    console.log(diffWaysToCompute(expression));
    expect(diffWaysToCompute(expression).sort((a, b) => a - b)).toEqual([
      -34, -14, -10, -10, 10,
    ]);
  });
});
