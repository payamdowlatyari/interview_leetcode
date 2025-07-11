// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1,
// such that encoded[i] = arr[i] XOR arr[i + 1].
// For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.

// Constraints:

// 2 <= n <= 104
// encoded.length == n - 1
// 0 <= encoded[i] <= 105
// 0 <= first <= 105

/**
 * Decodes a given encoded array back to the original array.
 *
 * The encoded array is formed by XORing consecutive elements of
 * the original array. Given the first element of the original
 * array, this function reconstructs the entire original array.
 *
 * @param {number[]} encoded - An array of encoded integers, where
 * each element is the result of XORing two consecutive elements
 * in the original array.
 * @param {number} first - The first element of the original array.
 * @returns {number[]} The decoded original array.
 *
 * @example
 * decode([1, 2, 3], 1) // [1, 0, 2, 1]
 * decode([6, 2, 7, 3], 4) // [4, 2, 6, 2, 7, 3]
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function decode(encoded, first) {
  const res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
}
