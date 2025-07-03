import { reverseWords } from "./reverseWords2.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "Mr Ding"
// Output: "rM gniD"

describe('Reverse Words in a String II', () => { 

    test('Test 1', () => { 
        const s1 = "Let's take LeetCode contest"
        const result = reverseWords(s1)
        expect(result).toBe("s'teL ekat edoCteeL tsetnoc")
    })

    test('Test 2', () => {
        const s2 = "Mr Ding"
        const result = reverseWords(s2)
        expect(result).toBe("rM gniD")
    })

});