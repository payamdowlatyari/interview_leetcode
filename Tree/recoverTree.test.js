import { recoverTree } from "./recoverTree";
import { TreeNode } from "./node/TreeNode";
import { expect, test, describe } from '@jest/globals';

// Example: 
//
//      1          3
//     /          /  
//    3    -->   1
//     \          \  
//      2          2
//
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

describe('Describe Cases', () => { 

    test('Test 1', () => { 
        
        const tree = new TreeNode(1);
        tree.left = new TreeNode(3);
        tree.right = new TreeNode(null);
        tree.right.left = new TreeNode(2);
        tree.right.right = new TreeNode(null);

        expect(tree).toEqual(expect.any(Object));
        expect(tree.val).toBe(1);
        expect(tree.left.val).toBe(3);
        expect(tree.right.left.val).toBe(2);
        recoverTree(tree);
        expect(tree).toEqual(expect.any(Object));
    })
})