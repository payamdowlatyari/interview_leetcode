import { exist } from "./wordSearch";
import { expect, describe, it } from "@jest/globals";

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

describe('Word Search Tests', () => {

    it('should return true', () => {
        expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true);
    });

    it('should return true for the second example', () => {
        expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")).toBe(true);
    });

    it('should return false for the third example', () => {
        expect(exist([["C","A","A"],["A","A","A"],["B","C","D"]], "ABCB")).toBe(false);
    });

});