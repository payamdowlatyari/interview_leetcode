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
};