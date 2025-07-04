// Given an integer array arr, return the mean of the remaining integers 
// after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.
 
// Constraints:

// 20 <= arr.length <= 1000
// arr.length is a multiple of 20.
// 0 <= arr[i] <= 105

/**
 * Calculates the trimmed mean of an array.
 * The trimmed mean is the average of the elements after removing
 * the smallest 5% and the largest 5% of the elements.
 * 
 * @param {number[]} arr
 * @return {number}
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function trimMean(arr) {
  
    arr.sort((a, b) => a - b);
    let len = arr.length;
    let start = (len / 20)
    let end = len - start

    let sum = 0;

    for (let i = start; i < end; i++) {
        sum += arr[i]
    }

    let mean = sum / (len - len * 0.1)

    return mean;
};