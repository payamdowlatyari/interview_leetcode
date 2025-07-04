import { containsDup } from './containsDup';
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 
describe('Describe Cases', () => { 

    test('Test 1', () => { 
        const nums1 = [1,2,3,1]
        const k1 = 3
        const sum = containsDup(nums1, k1)
        expect(sum).toBe(true)
    })

    test('Test 2', () => {
        const nums2 = [1,0,1,1]
        const k2 = 1
        const sum = containsDup(nums2, k2)
        expect(sum).toBe(true)
    })

    test('Test 3', () => {
        const nums3 = [1,2,3,1,2,3]
        const k3 = 2
        const sum = containsDup(nums3, k3)
        expect(sum).toBe(false)
    })

});