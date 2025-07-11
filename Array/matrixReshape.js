// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

/**
 * Reshapes a given matrix into a new matrix with specified dimensions.
 * If the reshape operation is not possible, returns the original matrix.
 *
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 *
 * @example
 * Input: mat = [[1,2],[3,4]], r = 1, c = 4
 * Output: [[1,2,3,4]]
 * Input: mat = [[1,2],[3,4]], r = 2, c = 4
 * Output: [[1,2],[3,4]]
 *
 * Time Complexity: O(m * n), where m is the number of rows and n is the number of columns in the original matrix.
 * Space Complexity: O(1), since we are using the result matrix directly.
 */
export function matrixReshape(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;

  const result = Array.from({ length: r }, () => Array(c));
  for (let i = 0; i < m * n; i++) {
    result[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }
  return result;
}
