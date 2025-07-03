import { nextGreatestLetter } from "./nextGreatestLetter.js";

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

describe('nextGreatestLetter', () => {

   it('should return c', () => {
      expect(nextGreatestLetter(["c","f","j"], "a")).toBe("c");
   });

   it('should return f', () => {
      expect(nextGreatestLetter(["c","f","j"], "c")).toBe("f");
   });

   it('should return x', () => {
      expect(nextGreatestLetter(["x","x","y","y"], "z")).toBe("x");
   });

});