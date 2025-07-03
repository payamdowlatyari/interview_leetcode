// Function Composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function 
// fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Constraints:
// -1000 <= x <= 1000
// 0 <= functions.length <= 1000
// all functions accept and return a single integer

/**
 * Composes an array of functions into a single function.
 * 
 * @param {Function[]} functions
 * @return {Function}
 * 
 * @example
 * const functions = [x => x + 1, x => x * x, x => 2 * x];
 * const result = compose(functions)(4);
 * console.log(result); // Output: 65
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function compose(functions) {
    
    return function(x) {
        return functions.reduceRight((result, fn) => fn(result), x);
    }
};