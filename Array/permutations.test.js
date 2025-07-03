import { allPermutations } from "./permutations.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [4,5]
// Output: [[4,5],[5,4]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

describe('Permutations', () => {
    test('Example 1', () => {
        expect(allPermutations([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    });
    test('Example 2', () => {
        expect(allPermutations([4,5])).toEqual([[4,5],[5,4]]);
    });
    test('Example 3', () => {
        expect(allPermutations([1])).toEqual([[1]]);
    });
});