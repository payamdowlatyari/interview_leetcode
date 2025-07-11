// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

/**
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 *
 * @param {character[][]} matrix
 * @return {number}
 * 
 * @example
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * Output: 4
 * Explanation: The maximum size square is a 1 x 1 square.
 * 
 * Input: matrix = [["0","1"],["1","0"]]
 * Output: 1
 * Explanation: The maximum size square is a 1 x 1 square.
 *
 * Time complexity: O(m * n)
 * Space complexity: O(m * n)
 */
export function maximalSquare(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max * max;
}
