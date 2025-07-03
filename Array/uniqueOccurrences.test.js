import { uniqueOccurrences } from "./uniqueOccurrences.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
// No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

describe('uniqueOccurrences', () => {
    test('Example 1', () => {
        const arr1 = [1,2,2,1,1,3];
        const result1 = uniqueOccurrences(arr1);
        expect(result1).toBe(true);
    });

    test('Example 2', () => {
        const arr2 = [1,2];
        const result2 = uniqueOccurrences(arr2);
        expect(result2).toBe(false);
    });

    test('Example 3', () => {
        const arr3 = [-3,0,1,-3,1,1,1,-3,10,0];
        const result3 = uniqueOccurrences(arr3);
        expect(result3).toBe(true);
    });
});