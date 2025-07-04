import { myPow } from "./myPow";
import { expect, it, describe } from "@jest/globals";

// Example 1:
// Input: x = 0.00001, n = 2147483647
// Output: 0

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

describe('myPow', () => {

    it('should return 0 for the first example', () => {
        expect(myPow(0.00001, 2147483647).toFixed(5)).toBe("0.00000");
    });

    it('should return 9.26100 for the second example', () => {
        expect(myPow(2.10000, 3).toFixed(5)).toBe("9.26100");
    });

    it('should return 0.25000 for the third example', () => {
        expect(myPow(2.00000, -2).toFixed(5)).toBe("0.25000");
    });

});

