// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.
// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi.
// For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.
// Return the number of rectangles that can make a square with a side length of maxLen.

// Constraints:

// 1 <= rectangles.length <= 1000
// rectangles[i].length == 2
// 1 <= li, wi <= 109
// li != wi

/**
 * Counts the number of rectangles that can be cut into a square of the largest possible side length.
 *
 * @param {number[][]} rectangles - An array of rectangles, where each rectangle is an array of two numbers, [li, wi] representing
 * the length and width of the rectangle.
 *
 * @returns {number} The number of rectangles that can be cut into a square of the largest possible side length.
 *
 * @example
 * Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
 * Output: 3
 * Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
 * The largest possible square is of length 5, and you can get it out of 3 rectangles.
 *
 * Input: rectangles = [[2,3],[3,7],[4,3],[3,7]]
 * Output: 3
 * Explanation: The largest squares you can get from each rectangle are of lengths [2,3,3,3].
 * The largest possible square is of length 3, and you can get it out of 3 rectangles.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function countGoodRectangles(rectangles) {
  let maxLen = 0;
  let count = 0;
  for (let i = 0; i < rectangles.length; i++) {
    const len = Math.min(rectangles[i][0], rectangles[i][1]);
    if (len > maxLen) {
      maxLen = len;
      count = 1;
    } else if (len === maxLen) {
      count++;
    }
  }
  return count;
}
