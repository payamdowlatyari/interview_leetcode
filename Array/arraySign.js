// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Constraints:

// 1 <= nums.length <= 1000
// -100 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function arraySign(nums) {
    
    if (nums.includes(0)) return 0;

    let product = 1;

    for (let i = 0; i < nums.length; i++)
        product *= nums[i];
    
    if (product < 0) return -1;
    
    return 1;
};