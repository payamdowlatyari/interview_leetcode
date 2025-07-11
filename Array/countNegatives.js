// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
// return the number of negative numbers in grid.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

// Follow up: Could you find an O(n + m) solution?

/**
 * Counts the number of negative numbers in a sorted 2D grid.
 *
 * @param {number[][]} grid
 * @return {number}
 *
 * @example
 * Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * Output: 8
 * Explanation: There are 8 negatives number in the matrix.
 *
 * Time complexity: O(m * n)
 * Space complexity: O(1)
 */
export function countNegatives(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) count++;
    }
  }

  return count;
}
