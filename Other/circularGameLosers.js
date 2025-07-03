// There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. 
// More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, 
// and moving clockwise from the nth friend brings you to the 1st friend.

// The rules of the game are as follows:

// 1st friend receives the ball.

// After that, 1st friend passes it to the friend who is k steps away from them in the clockwise direction.
// After that, the friend who receives the ball should pass it to the friend who is 2 * k steps away from them in the clockwise direction.
// After that, the friend who receives the ball should pass it to the friend who is 3 * k steps away from them in the clockwise direction, and so on and so forth.
// In other words, on the ith turn, the friend holding the ball should pass it to the friend who is i * k steps away from them in the clockwise direction.

// The game is finished when some friend receives the ball for the second time.

// The losers of the game are friends who did not receive the ball in the entire game.

// Given the number of friends, n, and an integer k, return the array answer, 
// which contains the losers of the game in the ascending order.

// Constraints:

// 1 <= k <= n <= 50

/**
 * Returns the losers of the game
 * 
 * The game goes as follows:
 * 1) Start at 1st friend and pass the ball to the friend who is k steps away from them - 2nd friend.
 * 2) 2nd friend passes the ball to the friend who is 2k steps away from them - 3rd friend.
 * 3) 3rd friend passes the ball to the friend who is 3k steps away from them  - 4th friend.
 * 4) The game ends as 4th friend receives the ball for the second time.
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function circularGameLosers(n, k) {

    let winners = [];

    let i = 0;
    let m = 1;

    while (winners.length <= n) {

        m = m + (i * k);

        if (m % n == 0) m = n;

        if (m > n) m = m % n;

        if (!winners.includes(m))
            winners.push((m));
        
        else break;   
        i++;  
    }

    let losers = [];

    for (let j = 1; j <= n; j++) 
        if (!winners.includes(j))
            losers.push(j);
    
    return losers;
};