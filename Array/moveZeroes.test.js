import { moveZeroes } from "./moveZeroes";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

describe('moveZeroes', () => {
    test('Example 1', () => {
        const nums1 = [0, 1, 0, 3, 12];
        moveZeroes(nums1);
        expect(nums1).toEqual([1, 3, 12, 0, 0]);
    });

    test('Example 2', () => {
        const nums2 = [0];
        moveZeroes(nums2);
        expect(nums2).toEqual([0]);
    });
});