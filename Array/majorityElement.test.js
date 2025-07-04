import { majorityElement } from "./majorityElement";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

describe('majorityElement', () => {
    test('Example 1', () => {
        const nums1 = [3, 2, 3];
        const result = majorityElement(nums1);
        expect(result).toBe(3);
    });

    test('Example 2', () => {
        const nums2 = [2, 2, 1, 1, 1, 2, 2];
        const result = majorityElement(nums2);
        expect(result).toBe(2);
    });
});
