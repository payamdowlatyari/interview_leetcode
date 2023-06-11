// You are given an integer array coins representing coins of different denominations 
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10^4

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export default function coinChange(coins, amount) {


    let n = 0;
    let r = amount;

    if (coins.length >= 1) {
        n = n + (r - r % coins[0]) / coins[0];
        r = r % coins[0];   
        
        if (r == 0 && coins.length == 1) return n;
        

        

    }

    

//    let n = 0;
//    let r = amount;
//    let i = coins.length - 1;
   
//    coins.sort((a, b) => { return a - b });


//    while (i >= 0) {

//     console.log('coins: i ' + i +  '  ' + coins[i] + ' n ' + n + ' r ' + r)

//        if (r >= coins[i]) {
//            n = n + (r - r % coins[i]) / coins[i];
//            r = r % coins[i];            
//        } 
//        i--; 


//    }

//    if (r === 0) return n;
//    return -1;
};