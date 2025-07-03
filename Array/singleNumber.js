// Given an integer array nums where every element appears three times except for one, 
// which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Constraints:
// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1

// Each element in nums appears exactly three times except for one element which appears once.

/**
 * Finds the single number in an array where every element appears three times except for one.
 * This function iterates through the array and checks for the unique element that does not repeat.
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function singleNumber(nums) {

    let ones = 0, twos = 0;

    for (let i = 0; i < nums.length; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }

    return ones;
};