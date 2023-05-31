// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 < nums[i], target < 10^4
// All the integers in nums are unique.
// nums is sorted in ascending order.


const binarySerach = (nums, l, r, t) => {

    if (r >= l) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === t) return m;

        if (nums[m] > t) 
            return binarySerach(nums, l, m - 1, t);
        
        return binarySerach(nums, m + 1, r, t);
    } 
    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export default function search(nums, target) {

    if (nums.length === 0) return -1;
    if (nums.length === 1 && target === nums[0]) return 0;

    return binarySerach(nums, 0, nums.length - 1, target);
    
};
