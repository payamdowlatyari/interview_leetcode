// You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array. 
// If it is, return the index of the largest element, or return -1 otherwise.

// Constraints:

// 2 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.

/**
 * Finds the index of the dominant element in an array.
 * An element is dominant if it is at least twice as large as every other element.
 *
 * @param {number[]} nums
 * @returns {number}
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function dominantIndex(nums) {
    if (nums.length === 0) return -1;

    let maxIndex = 0;
    let secondMax = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            secondMax = nums[maxIndex];
            maxIndex = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }

    return secondMax !== -1 && nums[maxIndex] >= 2 * secondMax ? maxIndex : -1;
}
