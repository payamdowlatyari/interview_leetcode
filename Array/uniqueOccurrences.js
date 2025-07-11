// Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences
// of each value in the array is unique or false otherwise.

// Constraints:
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

/**
 * Checks if the number of occurrences of each value in the array is unique.
 * This function counts the occurrences of each number in the array
 * and then checks if all counts are unique.
 *
 * @param {number[]} arr
 * @return {boolean}
 * 
 * @example
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function uniqueOccurrences(arr) {
  let occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    if (!occurrences[arr[i]]) {
      occurrences[arr[i]] = 1;
    } else {
      occurrences[arr[i]]++;
    }
  }

  let temp = [];

  for (const count in occurrences) {
    if (temp.includes(occurrences[count])) return false;
    else temp.push(occurrences[count]);
  }

  return true;
}
