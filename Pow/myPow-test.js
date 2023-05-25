import myPow from "./myPow.js";

// Example 1:
// Input: x = 0.00001, n = 2147483647
// Output: 0

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

const myPowTest = () => {

    console.log('--------1--------')
    const x1 = 0.00001; 
    const n1 = 2147483647;
    console.log('x1: ' + x1 + ' n1: ' + n1);
    console.log(myPow(x1, n1));
    console.log('--------2--------')
    const x2 = 2.10000; 
    const n2 = 3;
    console.log('x2: ' + x2 + ' n2: ' + n2);
    console.log(myPow(x2, n2));
    console.log('--------3--------')
    const x3 = 2.00000; 
    const n3 = -2;
    console.log('x3: ' + x3 + ' n3: ' + n3);
    console.log(myPow(x3, n3));
}

myPowTest();