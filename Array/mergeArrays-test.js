import merge from "./mergeArrays.js";

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. 
// The 0 is only there to ensure the merge result can fit in nums1.

(() => {

    let nums1 = [1,2,3,0,0,0];
    let m = 3;
    let nums2 = [2,5,6]; 
    let n = 3;
    

    console.log('-----1-----');
    console.log('Num1: ' + nums1 + ' Num2: ' + nums2);
    console.log('Output');
    console.log(merge(nums1, m, nums2, n));
    console.log('-----------');

    console.log();

    let nums11 = [0];
    let m1 = 0;
    let nums21 = [1]; 
    let n1 = 1;
    

    console.log('-----2-----');
    console.log('Num1: ' + nums11 + ' Num2: ' + nums21);
    console.log('Output');
    console.log(merge(nums11, m1, nums21, n1));
    console.log('-----------');

    console.log();

    let nums12 = [4,5,6,0,0,0];
    let m2 = 3;
    let nums22 = [1,2,3]; 
    let n2 = 3;
    

    console.log('-----3-----');
    console.log('Num1: ' + nums12 + ' Num2: ' + nums22);
    console.log('Output');
    console.log(merge(nums12, m2, nums22, n2));
    console.log('-----------');

    console.log();


    // let nums13 = [-1,0,0,3,3,3,0,0,0];
    let nums13 = [0,0,3,0,0,0,0,0,0];
    let m3 = 3;
    let nums23 = [-1,1,1,1,2,3];
    let n3 = 6;
    

    console.log('-----4-----');
    console.log('Num1: ' + nums13 + ' Num2: ' + nums23);
    console.log('Output');
    console.log(merge(nums13, m3, nums23, n3));
    console.log('-----------');

    console.log();

})();