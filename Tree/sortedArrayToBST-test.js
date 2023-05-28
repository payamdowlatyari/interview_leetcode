import preOrderTravarsal from "./preOrderTravarsal.js";
import sortedArrayToBST from "./sortedArrayToBST.js";

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

const sortedArrayToBSTTest = () => {

    const nums1 = [-10,-3,0,5,9];
    console.log('----1----');
    console.log(nums1);
    console.log('convert to BST');
    preOrderTravarsal(sortedArrayToBST(nums1));
    console.log('---------');

    console.log();

    const nums2 = [-10,-3,0,5,9];
    console.log('----2----');
    console.log(nums2);
    console.log('convert to BST');
    preOrderTravarsal(sortedArrayToBST(nums2));
    console.log('---------');

}

sortedArrayToBSTTest();