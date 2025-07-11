// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

/**
 * Rotates the given 2D matrix in-place.
 *
 * @param {number[][]} matrix
 * @param {boolean} clockwise
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * @example
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 * 
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
export function rotateImage(matrix, clockwise = true) {
  let n = matrix.length;

  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j];

      if (clockwise) {
        matrix[i][j] = matrix[n - 1 - j][i];
        matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
        matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
        matrix[j][n - 1 - i] = temp;
      } else {
        matrix[i][j] = matrix[j][n - 1 - i];
        matrix[j][n - 1 - i] = matrix[n - 1 - i][n - 1 - j];
        matrix[n - 1 - i][n - 1 - j] = matrix[n - 1 - j][i];
        matrix[n - 1 - j][i] = temp;
      }
    }
  }

  return matrix;
}
