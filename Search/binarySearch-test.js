import search from "./binarySearch.js";

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const binarySearchTest = () => {

    let nums = [-1,0,3,5,9,12];
    let target = 9;

    console.log('-----1-----');
    console.log(nums);
    console.log(target);
    console.log(search(nums, target));
    console.log('-----------');
    console.log();

    nums = [-1,0,3,5,9,12]; 
    target = 2;

    console.log('-----2-----');
    console.log(nums);
    console.log(target);
    console.log(search(nums, target));
    console.log('-----------');

    nums = [2, 5]; 
    target = 5;

    console.log('-----3-----');
    console.log(nums);
    console.log(target);
    console.log(search(nums, target));
    console.log('-----------');
};

binarySearchTest();