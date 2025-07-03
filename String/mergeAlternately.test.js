import { mergeAlternately } from "./mergeAlternately.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

describe('Merge Alternately', () => {

   test('Example 1', () => {
      expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
   });

   test('Example 2', () => {
      expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
   });

   test('Example 3', () => {
      expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
   });

    test('Empty strings', () => {
        expect(mergeAlternately("", "")).toBe("");
    });

    test('One empty string', () => {
        expect(mergeAlternately("abc", "")).toBe("abc");
        expect(mergeAlternately("", "xyz")).toBe("xyz");
    });
});