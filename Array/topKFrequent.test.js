import { topKFrequent } from "./topKFrequent.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

describe('topKFrequent', () => {
    test('Example 1', () => {
        const nums1 = [1, 1, 1, 2, 2, 3];
        const k1 = 2;
        const result1 = topKFrequent(nums1, k1);
        expect(result1).toEqual([1, 2]);
    });

    test('Example 2', () => {
        const nums2 = [1];
        const k2 = 1;
        const result2 = topKFrequent(nums2, k2);
        expect(result2).toEqual([1]);
    });
});