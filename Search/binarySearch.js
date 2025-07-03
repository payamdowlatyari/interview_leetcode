// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 < nums[i], target < 10^4
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @param {number[]} nums - The sorted array of integers to search.
 * @param {number} l - The left index of the current search range.
 * @param {number} r - The right index of the current search range.
 * @param {number} t - The target value to search for.
 * @return {number} - The index of the target value if found; otherwise, -1.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
const binarySearch = (nums, l, r, t) => {

    if (r >= l) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === t) return m;

        if (nums[m] > t) 
            return binarySearch(nums, l, m - 1, t);

        return binarySearch(nums, m + 1, r, t);
    } 
    return -1;
};

/**
 * Searches for a target value in a sorted array using binary search.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function search(nums, target) {

    let l = 0;
    let r = nums.length - 1;

    while (r >= l) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === target) return m;

        if (nums[m] > target) 
            r = m - 1;
        else 
            l = m + 1;
    } 
    return -1;
};
