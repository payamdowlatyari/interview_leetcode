import { wordBreak } from "./wordBreak";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

describe("wordBreak", () => {
    test("Example 1", () => {
        expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
    });
    test("Example 2", () => {
        expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
    });
    test("Example 3", () => {
        expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
    });
});