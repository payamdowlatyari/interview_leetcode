import { maxDepth } from "./maxDepthTree";
import { TreeNode } from "./node/TreeNode";
import { expect, test, describe } from '@jest/globals';

// Example 1:

//          3
//         / \
//        9   20
//           /  \
//          15   7

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

//         1
//        / \
//       2   2
//      / \
//     3   3
//    / \
//   4   4

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: 4

describe('Describe Cases', () => {

    test('Test 1', () => { 
        const tree1 = new TreeNode(3);
        tree1.left = new TreeNode(9);
        tree1.right = new TreeNode(20);
        tree1.right.left = new TreeNode(15);
        tree1.right.right = new TreeNode(7);
        expect(maxDepth(tree1)).toBe(3)
    })

    test('Test 2', () => {
        const tree2 = new TreeNode(1);
        tree2.left = new TreeNode(2);
        tree2.right = new TreeNode(2);
        tree2.left.left = new TreeNode(3);
        tree2.left.right = new TreeNode(3);
        tree2.right.left = new TreeNode(null);
        tree2.right.right = new TreeNode(null);
        tree2.left.left.left = new TreeNode(4);
        tree2.left.left.right = new TreeNode(4);
        expect(maxDepth(tree2)).toBe(4);
    })
})