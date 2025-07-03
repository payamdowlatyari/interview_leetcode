import { checkStraightLine } from "./checkStraightLine.js";

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

describe("checkStraightLine", () => {
    test("Example 1", () => {
        expect(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])).toBe(true);
    });
    test("Example 2", () => {
        expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])).toBe(false);
    });
});
