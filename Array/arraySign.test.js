import { arraySign } from "./arraySign.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0

// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

describe('Describe Cases', () => { 

    test('Test 1', () => { 
        const nums1 = [-1,-2,-3,-4,3,2,1]
        const sum = arraySign(nums1)
        expect(sum).toBe(1)
    })

    test('Test 2', () => {
        const nums2 = [1,5,0,2,-3]
        const sum = arraySign(nums2)
        expect(sum).toBe(0)
    })

    test('Test 3', () => {
        const nums3 = [-1,1,-1,1,-1]
        const sum = arraySign(nums3)
        expect(sum).toBe(-1)
    })

});
