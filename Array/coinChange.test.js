 import { coinChange } from "./coinChange";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

describe('Describe Cases', () => { 

    test('Test 1', () => { 
        const coins1 = [1,2,5]
        const amount1 = 11
        const sum = coinChange(coins1, amount1)
        expect(sum).toBe(3)
    })

    test('Test 2', () => {
        const coins2 = [2]
        const amount2 = 3
        const sum = coinChange(coins2, amount2)
        expect(sum).toBe(-1)
    })

    test('Test 3', () => {
        const coins3 = [1]
        const amount3 = 0
        const sum = coinChange(coins3, amount3)
        expect(sum).toBe(0)
    })

});