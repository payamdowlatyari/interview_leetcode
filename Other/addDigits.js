// Given an integer num, repeatedly add all its digits 
// until the result has only one digit, and return it.

// Constraints:

// 0 <= num <= 2^31 - 1
 
// Follow up: Could you do it without any loop/recursion in O(1) runtime?

/**
 * Adds the digits of a number until it is a single digit.
 * 
 * @param {number} num
 * @return {number}
 * 
 * Time complexity: O(1)
 * Space complexity: O(1)
 */
export function addDigits(num){
    
    let sum = 0;

        while (num > 0) {
            sum += (num % 10)
            num = ((num - num % 10) / 10)
        }

        if (sum > 9) 
            return addDigits(sum);
    
    return sum;
}