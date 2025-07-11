// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude
// between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Constraints:

// n == gain.length
// 1 <= n <= 100
// -100 <= gain[i] <= 100

/**
 * Calculates the highest altitude reached during a biker's trip.
 *
 * @param {number[]} gain
 * @return {number}
 *
 * @example
 * Input: gain = [-5,1,5,0,-7]
 * Output: 1
 * Explanation: The altitudes are: [0,-5,-4,1,1,-6]. The highest is 1.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function largestAltitude(gain) {
  let max = 0;
  let point = 0;

  for (let i = 0; i < gain.length; i++) {
    point += gain[i];

    if (point > max) max = point;
  }

  return max;
}
