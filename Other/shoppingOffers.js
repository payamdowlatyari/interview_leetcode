// In LeetCode Store, there are n items to sell. Each item has a price. 
// However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.

// You are given an integer array price where price[i] is the price of the ith item, 
// and an integer array needs where needs[i] is the number of pieces of the ith item you want to buy.

// You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number 
// of pieces of the jth item in the ith offer and special[i][n] (i.e., the last integer in the array) is the price of the ith offer.

// Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. 
// You are not allowed to buy more items than you want, even if that would lower the overall price. 
// You could use any of the special offers as many times as you want.

// Constraints:

// n == price.length == needs.length
// 1 <= n <= 6
// 0 <= price[i], needs[i] <= 10
// 1 <= special.length <= 100
// special[i].length == n + 1
// 0 <= special[i][j] <= 50
// The input is generated that at least one of special[i][j] is non-zero for 0 <= j <= n - 1.

/** 
 * Calculates the minimum cost to buy items given their prices, special offers, and needs.
 * 
 * @param {number[]} price - An array of prices for each item.
 * @param {number[][]} special - An array of special offers, where each offer contains quantities of items and a total price.
 * @param {number[]} needs - An array representing the number of each item needed.
 * @returns {number} The minimum cost to fulfill the needs using the best combination of prices and special offers.
 * 
 * @example
 * const price = [2, 5];
 * const special = [[3, 0, 5], [1, 2, 10]];
 * const needs = [3, 2];
 * const result = shoppingOffers(price, special, needs);
 * console.log(result); // Output: 14
 *
 * @description
 * This function uses a depth-first search (DFS) approach with memoization to explore all combinations
 * of item purchases and special offers to find the minimum cost. It calculates the total price for
 * the items needed without any offers, then iterates through each special offer to see if it
 * can be applied. If the offer can be used (i.e., the needs for each item are sufficient), 
 * it recursively calculates the cost of the remaining needs after applying the offer.
 * The final result is the minimum cost found during the search.
 * 
 * Time Complexity: O(n * m^n), where n is the number of items and m is the number of special offers.
 * Space Complexity: O(n), where n is the number of items, due to the memoization map used to store previously computed results.
 */
export function shoppingOffers(price, special, needs) {
    const n = price.length;
    const memo = new Map();

    /**
     * A recursive function to calculate the minimum cost for the remaining needs.
     * @param {number[]} remainingNeeds - An array representing the remaining needs for each item.
     * @returns {number} The minimum cost to fulfill the remaining needs.
     */
    function dfs(remainingNeeds) {
        const key = remainingNeeds.join(',');
        if (memo.has(key)) return memo.get(key);

        let minCost = 0;
        for (let i = 0; i < n; i++) {
            minCost += price[i] * remainingNeeds[i];
        }

        for (const offer of special) {
            const offerNeeds = offer.slice(0, n);
            const offerCost = offer[n];

            let canApply = true;
            for (let i = 0; i < n; i++) {
                if (offerNeeds[i] > remainingNeeds[i]) {
                    canApply = false;
                    break;
                }
            }

            if (canApply) {
                const remaining = remainingNeeds.map((need, i) => need - offerNeeds[i]);
                minCost = Math.min(minCost, offerCost + dfs(remaining));
            }
        }
        memo.set(key, minCost);
        return minCost;
    }

    return dfs(needs);
}