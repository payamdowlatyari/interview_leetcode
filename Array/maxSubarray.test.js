import { maxSubArray } from "./maxSubarray.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

describe('maxSubArray', () => {
    test('Example 1', () => {
        const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        const result = maxSubArray(nums1);
        expect(result).toBe(6);
    });

    test('Example 2', () => {
        const nums2 = [1];
        const result = maxSubArray(nums2);
        expect(result).toBe(1);
    });

    test('Example 3', () => {
        const nums3 = [5, 4, -1, 7, 8];
        const result = maxSubArray(nums3);
        expect(result).toBe(23);
    });
});
 