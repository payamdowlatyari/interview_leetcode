// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Constraints:

// -2^31 <= n <= 2^31 - 1
 
// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
export default function isPowerOfTwo(n) {

    if (n == 0) return false; 

    if (n > 1 && n % 2 == 1) return false;


    if (n == 1) return true;


        return isPowerOfTwo(n / 2);
   
};