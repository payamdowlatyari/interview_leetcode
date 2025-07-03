import { findPeakElement } from "./findPeakElement.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, 
// or index number 5 where the peak element is 6.

describe("findPeakElement", () => {
    test("findPeakElement", () => {
        const nums1 = [1, 2, 3, 1];
        const sum = findPeakElement(nums1);
        expect(sum).toBe(2);
    });

    test("findPeakElement", () => {
        const nums2 = [1, 2, 1, 3, 5, 6, 4];
        const sum = findPeakElement(nums2);
        expect(sum).toBe(5);
    });
});