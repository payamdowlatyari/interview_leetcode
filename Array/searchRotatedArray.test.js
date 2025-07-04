import { search } from "./searchRotatedArray";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1
 
describe('search', () => {
    test('Example 1', () => {
        const nums = [4,5,6,7,0,1,2];
        const target = 0;
        const result = search(nums, target);
        expect(result).toBe(4);
    });

    test('Example 2', () => {
        const nums = [4,5,6,7,0,1,2];
        const target = 3;
        const result = search(nums, target);
        expect(result).toBe(-1);
    });

    test('Example 3', () => {
        const nums = [1];
        const target = 0;
        const result = search(nums, target);
        expect(result).toBe(-1);
    });
});