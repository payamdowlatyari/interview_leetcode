import { isBalanced } from "./isBalancedTree";
import { TreeNode } from "./node/TreeNode";
import { expect, test, describe } from "@jest/globals";

// Given a binary tree, determine if it is height-balanced.

// Example 1:

//      3
//     / \
//    9   20
//       /  \ 
//      15   7

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:

//         1
//        / \
//       2   2
//      / \
//     3   3
//    / \
//   4   4 

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:

// Input: root = []
// Output: true

describe('isBalanced', () => {

    test('Test 1', () => {
        const tree = new TreeNode(3);
        tree.left = new TreeNode(9);
        tree.right = new TreeNode(20);
        tree.right.left = new TreeNode(15);
        tree.right.right = new TreeNode(7);
        expect(isBalanced(tree)).toBe(true);
    });

    test('Test 2', () => {
        const tree = new TreeNode(1);
        tree.left = new TreeNode(2);
        tree.right = new TreeNode(2);
        tree.left.left = new TreeNode(3);
        tree.left.right = new TreeNode(3);
        tree.left.left.left = new TreeNode(4);
        tree.left.left.right = new TreeNode(4);
        expect(isBalanced(tree)).toBe(false);
    });

    test('Test 3', () => {
        const tree = null;
        expect(isBalanced(tree)).toBe(true);
    });

});