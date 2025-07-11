// You are given an integer array coins representing coins of different
// denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

/**
 * Check if the coins can make up the given amount.
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * @example
 * coinChange([1, 2, 5], 11) // 3
 * coinChange([2], 3) // -1
 *
 * Time Complexity: O(amount * coins.length)
 * Space Complexity: O(amount)
 */
export function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}
