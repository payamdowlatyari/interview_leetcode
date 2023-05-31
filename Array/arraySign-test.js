import arraySign from "./arraySign.js";

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0

// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1


const arraySignTest = () => {

    let nums = [-1,-2,-3,-4,3,2,1];

    console.log('-----1-----');
    console.log('Array:');
    console.log(nums);
    console.log('Sign:');
    console.log(arraySign(nums));
    console.log('-----------');

    console.log();

    nums = [1,5,0,2,-3];

    console.log('-----2-----');
    console.log('Array:');
    console.log(nums);
    console.log('Sign:');
    console.log(arraySign(nums));
    console.log('-----------');
    
    console.log();

    nums = [-1,1,-1,1,-1];

    console.log('-----3-----');
    console.log('Array:');
    console.log(nums);
    console.log('Sign:');
    console.log(arraySign(nums));
    console.log('-----------');
}

arraySignTest();