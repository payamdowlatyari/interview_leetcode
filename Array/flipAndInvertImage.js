// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Constraints:

// n == image.length
// n == image[i].length
// 1 <= n <= 20
// images[i][j] is either 0 or 1.

/**
 * Flips and inverts a binary image.
 *
 * @param {number[][]} image
 * @return {number[][]}
 *
 * @example
 * Input: image = [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 *
 * Time Complexity: O(n^2), where n is the number of rows and columns in the image.
 * Space Complexity: O(1), since we are modifying the image in-place.
 */
export function flipAndInvertImage(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    image[i] = image[i].map((val) => val ^ 1);
  }
  return image;
}
