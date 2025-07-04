import { checkRecord } from "./checkRecord";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

// Example 2:
// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
 
describe("checkRecord", () => {
    test("Example 1", () => {
        expect(checkRecord("PPALLP")).toBe(true);
    });
    test("Example 2", () => {
        expect(checkRecord("PPALLL")).toBe(false);
    });
});