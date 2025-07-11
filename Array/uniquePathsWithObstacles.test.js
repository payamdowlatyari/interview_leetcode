import { uniquePathsWithObstacles } from "./uniquePathsWithObstacles";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Example 2:
// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

describe("Describe Cases", () => {
  test("Test 1", () => {
    const obstacleGrid1 = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const sum = uniquePathsWithObstacles(obstacleGrid1);
    expect(sum).toBe(2);
  });

  test("Test 2", () => {
    const obstacleGrid2 = [
      [0, 1],
      [0, 0],
    ];
    const sum = uniquePathsWithObstacles(obstacleGrid2);
    expect(sum).toBe(1);
  });
});
