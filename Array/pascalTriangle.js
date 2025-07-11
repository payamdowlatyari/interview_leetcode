// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//          1
//        1   1
//      1   2   1
//    1   3   3   1
//  1   4   6   4   1

// Constraints:
// 1 <= numRows <= 30

/**
 * Generates the first numRows of Pascal's triangle.
 *
 * @param {number} numRows
 * @return {number[][]}
 *
 * @example
 * Input: numRows = 5
 * Output: [
 *   [1],
 *   [1, 1],
 *   [1, 2, 1],
 *   [1, 3, 3, 1],
 *   [1, 4, 6, 4, 1]
 * ]
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 */
export function generate(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;
    triangle[i][i] = 1;

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle;
}
