import TreeNode from "./TreeNode.js";

// Given an integer array nums where the elements 
// are sorted in ascending order, convert it to a 
// height-balanced binary search tree.

// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in a strictly increasing order.

const buildTree = (nums, start, end) => {

    if (start > end) 
        return null;

    let mid = parseInt((start + end) / 2);

    let node = new TreeNode(nums[mid]);

    node.left = buildTree(nums, start, mid - 1);
    node.right = buildTree(nums, mid + 1 , end);

    return node;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

export default function sortedArrayToBST (nums) {

   return buildTree(nums, 0, nums.length - 1)  
};