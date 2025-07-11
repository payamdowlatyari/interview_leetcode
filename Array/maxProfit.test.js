import { maxProfit } from "./maxProfit";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

describe("maxProfit", () => {
  test("Example 1", () => {
    const prices1 = [7, 1, 5, 3, 6, 4];
    const result = maxProfit(prices1);
    expect(result).toBe(5);
  });

  test("Example 2", () => {
    const prices2 = [7, 6, 4, 3, 1];
    const result = maxProfit(prices2);
    expect(result).toBe(0);
  });
});
