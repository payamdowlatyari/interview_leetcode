import { findDifference } from "./findDifference";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]

// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. 
// Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

describe('Describe Cases', () => { 

    test('Test 1', () => { 
        const nums1 = [1,2,3]
        const nums2 = [2,4,6]
        const sum = findDifference(nums1, nums2)
        expect(sum).toEqual([[1,3],[4,6]])
    })

    test('Test 2', () => {
        const nums1 = [1,2,3,3]
        const nums2 = [1,1,2,2]
        const sum = findDifference(nums1, nums2)
        expect(sum).toEqual([[3],[]])
    })

})