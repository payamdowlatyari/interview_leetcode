import { insert } from "./insertInterval";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

describe("insert", () => {
    test("Example 1", () => {
        expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
    });
    test("Example 2", () => {
        expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
    });
});