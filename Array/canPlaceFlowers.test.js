import { canPlaceFlowers } from "./canPlaceFlowers";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

describe('Describe Cases', () => { 

    test('Test 1', () => { 
        const flowerbed1 = [1,0,0,0,1]
        const n1 = 1
        const sum = canPlaceFlowers(flowerbed1, n1)
        expect(sum).toBe(true)
    })

    test('Test 2', () => { 
        const flowerbed2 = [1,0,0,0,1]
        const n2 = 2
        const sum = canPlaceFlowers(flowerbed2, n2)
        expect(sum).toBe(false)
    })

});