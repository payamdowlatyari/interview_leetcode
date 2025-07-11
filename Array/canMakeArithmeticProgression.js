// A sequence of numbers is called an arithmetic progression if the
// difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged
// to form an arithmetic progression. Otherwise, return false.

// Constraints:
// 2 <= arr.length <= 1000
// -10^6 <= arr[i] <= 10^6

/**
 * Check if the array can be rearranged to form an arithmetic progression.
 *
 * @param {number[]} arr
 * @return {boolean}
 *
 * @example
 * canMakeArithmeticProgression([3,5,1]) // true
 * canMakeArithmeticProgression([1,2,4]) // false
 * canMakeArithmeticProgression([-68,-96,-12,-40,16]) // true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function canMakeArithmeticProgression(arr) {
  arr.sort((a, b) => a - b);

  let diff = arr[1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != diff) return false;
  }

  return true;
}
