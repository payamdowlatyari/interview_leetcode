// Given an m x n matrix, return all elements of the matrix in spiral order.

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * Returns all elements of the matrix in spiral order.
 * This function traverses the matrix in a spiral pattern,
 * starting from the top-left corner and moving clockwise.
 * It collects the elements in an output array and returns it.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 * 
 * @example
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * Time complexity: O(m * n)
 * Space complexity: O(m * n)
 */
export function spiralOrder(matrix) {
  let i = 0;
  let j = 0;

  let row_start = 0;
  let row_end = matrix.length - 1;
  let col_start = 0;
  let col_end = matrix[0].length - 1;

  let output = [];

  while (col_start <= col_end || row_start <= row_end) {
    if (j > col_end) break;
    while (j <= col_end) {
      output.push(matrix[i][j]);
      j++;
    }
    j--;
    row_start++;
    i = row_start;
    if (i > row_end) break;
    while (i <= row_end) {
      output.push(matrix[i][j]);
      i++;
    }
    i--;
    col_end--;
    j = col_end;
    if (j < col_start) break;
    while (j >= col_start) {
      output.push(matrix[i][j]);
      j--;
    }
    j++;
    row_end--;
    i = row_end;
    if (i < row_start) break;
    while (i >= row_start) {
      output.push(matrix[i][j]);
      i--;
    }
    i++;
    col_start++;
    j = col_start;
  }

  return output;
}
