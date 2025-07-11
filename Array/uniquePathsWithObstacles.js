// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

/**
 * Finds the number of unique paths from the top-left corner to the bottom-right corner in a grid with obstacles.
 * The robot can only move either down or right at any point in time.
 * Returns the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 
 * @example
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: 2
 * Explanation: There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Right -> Down 
 *
 * Time complexity: O(m * n)
 * Space complexity: O(1)
 */
export function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let prevRow = new Array(n).fill(0);
  let currRow = new Array(n).fill(0);

  prevRow[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
  for (let i = 1; i < n; i++) {
    prevRow[i] = obstacleGrid[0][i] === 0 ? prevRow[i - 1] : 0;
  }

  for (let i = 1; i < m; i++) {
    currRow[0] = obstacleGrid[i][0] === 0 ? prevRow[0] : 0;
    for (let j = 1; j < n; j++) {
      currRow[j] = obstacleGrid[i][j] === 0 ? prevRow[j] + currRow[j - 1] : 0;
    }
    [prevRow, currRow] = [currRow, prevRow];
  }
  return prevRow[n - 1];
}
