import coinChange from "./coinChange.js";

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Example 4:

// Input: coins = [186,419,83,408], amount = 6249
// Output: -1

(() => {

    const coins1 = [1,2,5]; 
    let amount = 11;

    console.log('-----1-----');
    console.log('Coins');
    console.log(coins1);
    console.log('Amount');
    console.log(amount);
    console.log(coinChange(coins1, amount));
    console.log('-----------');

    console.log();

    const coins2 = [186,419,83,408]; 
    amount = 6249;

    console.log('-----2-----');
    console.log('Coins');
    console.log(coins2);
    console.log('Amount');
    console.log(amount);
    console.log(coinChange(coins2, amount));
    console.log('-----------');

    console.log();
})();