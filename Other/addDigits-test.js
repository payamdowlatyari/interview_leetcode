import addDigits from "./addDigits.js";

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Example 2:

// Input: num = 0
// Output: 0

const addDigitsTest = () => {

    const num1 = 38;

    console.log('------1------')
    console.log('num');
    console.log(num1);
    console.log(addDigits(num1));
    console.log('-------------')

    console.log();
    
    const num2 = 11;

    console.log('------2------')
    console.log('num');
    console.log(num2);
    console.log(addDigits(num2));
    console.log('-------------')
   
    const num3 = 0;

    console.log('------3------')
    console.log('num');
    console.log(num3);
    console.log(addDigits(num3));
    console.log('-------------')
};

addDigitsTest();