// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Constraints:

// -2^31 <= n <= 2^31 - 1
 
// Follow up: Could you solve it without loops/recursion?

/**
 * Checks if a number is a power of two.
 * 
 * @param {number} n
 * @return {boolean}
 * 
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function isPowerOfTwo(n) {

    if (n == 0) return false; 

    if (n > 1 && n % 2 == 1) return false;


    if (n == 1) return true;

        return isPowerOfTwo(n / 2);
   
};