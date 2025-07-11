import { canMakeArithmeticProgression } from "./canMakeArithmeticProgression";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1]
// with differences 2 and -2 respectively, between each consecutive elements.

// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

// Example 3:

// Input: arr = [-68,-96,-12,-40,16]
// Output: true
// Explanation: We can reorder the elements as [-68,-40,-12,-96,-16]
// or [-68,-40,-12,-16,-96] with differences 12 and -28 respectively,
// between each consecutive elements.

describe("Describe Cases", () => {
  test("Test 1", () => {
    const arr1 = [3, 5, 1];
    const sum = canMakeArithmeticProgression(arr1);
    expect(sum).toBe(true);
  });

  test("Test 2", () => {
    const arr2 = [1, 2, 4];
    const sum = canMakeArithmeticProgression(arr2);
    expect(sum).toBe(false);
  });

  test("Test 3", () => {
    const arr3 = [-68, -96, -12, -40, 16];
    const sum = canMakeArithmeticProgression(arr3);
    expect(sum).toBe(true);
  });
});
