import { removeTrailingZeros } from "./removeTrailingZeros.js";

// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".

// Example 2:

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

describe('Remove Trailing Zeros Tests', () => {

    it('should return 512301 for the first example', () => {
        expect(removeTrailingZeros('51230100')).toBe('512301');
    });

    it('should return 123 for the second example', () => {
        expect(removeTrailingZeros('123')).toBe('123');
    });

});
