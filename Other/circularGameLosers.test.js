import { circularGameLosers } from "./circularGameLosers";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: n = 5, k = 2
// Output: [4,5]

// Explanation: The game goes as follows:
// 1) Start at 1st friend and pass the ball to the friend who is 2 steps away from them - 3rd friend.
// 2) 3rd friend passes the ball to the friend who is 4 steps away from them - 2nd friend.
// 3) 2nd friend passes the ball to the friend who is 6 steps away from them  - 3rd friend.
// 4) The game ends as 3rd friend receives the ball for the second time.

// Example 2:

// Input: n = 4, k = 4
// Output: [2,3,4]

// Explanation: The game goes as follows:
// 1) Start at the 1st friend and pass the ball to the friend who is 4 steps away from them - 1st friend.
// 2) The game ends as 1st friend receives the ball for the second time.


describe("circularGameLosers", () => {
    test("Example 1", () => {
        expect(circularGameLosers(5, 2)).toEqual([4, 5]);
    });
    test("Example 2", () => {
        expect(circularGameLosers(4, 4)).toEqual([2, 3, 4]);
    });
})