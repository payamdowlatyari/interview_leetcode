// Given a string expression of numbers and operators, return all possible results from computing 
// all the different possible ways to group numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in 
// a 32-bit integer and the number of different results does not exceed 104.

// Constraints:

// 1 <= expression.length <= 20
// expression consists of digits and the operator '+', '-', and '*'.
// All the integer values in the input expression are in the range [0, 99].
// The integer values in the input expression do not have a leading '-' or '+' denoting the sign.

/**
 * @description Given a string expression of numbers and operators, return all possible results from computing 
 * all the different possible ways to group numbers and operators. 
 * 
 * @param {string} expression
 * @return {number[]}
 * 
 * @example
 * Input: expression = "2-1-1"
 * Output: [0,2]
 * 
 * Input: expression = "2*3-4*5"
 * Output: [-34,-14,-10,-10,10]
 * 
 * Time complexity: O(n^3)
 * Space complexity: O(n^2)
 */
export function diffWaysToCompute(expression) {
    const memo = {};
    /**
     * Given a string expression, compute all the different possible results from computing 
     * all the different possible ways to group numbers and operators.
     * 
     * @param {string} expr
     * @return {number[]}
     */
    const calculate = (expr) => {
        if (expr in memo) return memo[expr];
        const results = [];
        for (let i = 0; i < expr.length; i++) {
            if (expr[i] === '+' || expr[i] === '-' || expr[i] === '*') {
                const leftResults = calculate(expr.slice(0, i));
                const rightResults = calculate(expr.slice(i + 1));
                for (const l of leftResults) {
                    for (const r of rightResults) {
                        if (expr[i] === '+') results.push(l + r);
                        if (expr[i] === '-') results.push(l - r);
                        if (expr[i] === '*') results.push(l * r);
                    }
                }
            }
        }
        if (results.length === 0) results.push(parseInt(expr));
        memo[expr] = results;
        return results;
    };
    return calculate(expression);
};