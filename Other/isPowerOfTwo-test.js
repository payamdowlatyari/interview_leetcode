import isPowerOfTwo from "./isPowerOfTwo.js";

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Example 3:

// Input: n = 3
// Output: false

(() => {

    let n = 1;

    console.log('----1----')
    console.log('Input: ' + n);
    console.log('Output:');
    console.log(isPowerOfTwo(n));
    console.log('---------')
    console.log();

    n = 16;

    console.log('----2----')
    console.log('Input: ' + n);
    console.log('Output:');
    console.log(isPowerOfTwo(n));
    console.log('---------')
    console.log();

    n = 3;

    console.log('----3----')
    console.log('Input: ' + n);
    console.log('Output:');
    console.log(isPowerOfTwo(n));
    console.log('---------')
    console.log();

    n = 0;

    console.log('----4----')
    console.log('Input: ' + n);
    console.log('Output:');
    console.log(isPowerOfTwo(n));
    console.log('---------')
    console.log();

})();