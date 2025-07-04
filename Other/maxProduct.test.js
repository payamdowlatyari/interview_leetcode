import { maxProduct } from "./maxProduct";
import { expect, it, describe } from "@jest/globals";

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

describe('Max Product Tests', () => {

    it('should return 6 for the first example', () => {
        expect(maxProduct([2,3,-2,4])).toBe(6);
    });

    it('should return 0 for the second example', () => {
        expect(maxProduct([-2,0,-1])).toBe(0);
    });

});