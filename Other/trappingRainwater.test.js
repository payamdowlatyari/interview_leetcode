import { trap } from "./trappingRainwater";
import { expect, it, describe } from "@jest/globals";

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

describe('Trapping Rainwater Tests', () => {

    it('should return 6 for the first example', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
    });

    it('should return 9 for the second example', () => {
        expect(trap([4,2,0,3,2,5])).toBe(9);
    });

})