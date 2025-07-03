// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. 
// If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always 
// considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.
 
// Constraints:

// 1 <= nums.length <= 1000
// -2^31 <= nums[i] <= 2^31 - 1
// nums[i] != nums[i + 1] for all valid i.

/**
 * Finds a peak element in an array.
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function findPeakElement(nums) {

    let l = 0;
    let r = nums.length - 1;

    while (r >= l) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        } else if (nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }   

    return l;     
};