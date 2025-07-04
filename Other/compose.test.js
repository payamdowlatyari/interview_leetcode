import { compose } from "./compose";
import { expect, it, describe } from "@jest/globals";

// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Example 2:
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

// Example 3:
// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

describe('Describe Cases', () => {  

   it('should return 65 for the first example', () => {
      expect(compose([x => x + 1, x => x * x, x => 2 * x])(4)).toBe(65);
   });

   it('should return 1000 for the second example', () => {
      expect(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)).toBe(1000);
   });

   it('should return 42 for the third example', () => {
      expect(compose([])(42)).toBe(42);
   });

})