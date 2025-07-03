import { largestAltitude } from "./largestAltitude.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

describe('largestAltitude', () => {
    test('Example 1', () => {
        const gain1 = [-5, 1, 5, 0, -7];
        const result = largestAltitude(gain1);
        expect(result).toBe(1);
    });

    test('Example 2', () => {
        const gain2 = [-4, -3, -2, -1, 4, 3, 2];
        const result = largestAltitude(gain2);
        expect(result).toBe(0);
    });
});