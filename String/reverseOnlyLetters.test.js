import { reverseOnlyLetters } from "./reverseOnlyLetters";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

describe("reverseOnlyLetters", () => {
  test("Example 1", () => {
    expect(reverseOnlyLetters("ab-cd")).toBe("dc-ba");
  });
  test("Example 2", () => {
    expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toBe("j-Ih-gfE-dCba");
  });
  test("Example 3", () => {
    expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toBe(
      "Qedo1ct-eeLg=ntse-T!",
    );
  });
});
