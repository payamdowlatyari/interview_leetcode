import { searchMatrix } from "./searchMatrix";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

describe('searchMatrix', () => {
    test('Example 1', () => {
        const matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
        const target1 = 3;
        const result1 = searchMatrix(matrix1, target1);
        expect(result1).toBe(true);
    });

    test('Example 2', () => {
        const matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
        const target2 = 13;
        const result2 = searchMatrix(matrix2, target2);
        expect(result2).toBe(false);
    });
});
