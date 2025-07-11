import { shoppingOffers } from "./shoppingOffers";
import { describe, test, expect } from "@jest/globals";

// Example 1:

// Input: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
// Output: 14
// Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
// In special offer 1, you can pay $5 for 3A and 0B
// In special offer 2, you can pay $10 for 1A and 2B. 
// You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.

// Example 2:

// Input: price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
// Output: 11
// Explanation: The price of A is $2, and $3 for B, $4 for C. 
// You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C. 
// You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C. 
// You cannot add more items, though only $9 for 2A ,2B and 1C.

describe("shoppingOffers", () => {
  test("Example 1", () => {
    const price = [2, 5];
    const special = [[3, 0, 5], [1, 2, 10]];
    const needs = [3, 2];
    expect(shoppingOffers(price, special, needs)).toBe(14);
  });

  test("Example 2", () => {
    const price = [2, 3, 4];
    const special = [[1, 1, 0, 4], [2, 2, 1, 9]];
    const needs = [1, 2, 1];
    expect(shoppingOffers(price, special, needs)).toBe(11);
  });
});