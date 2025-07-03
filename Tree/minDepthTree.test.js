import { TreeNode } from "./node/TreeNode.js";
import { minDepth } from "./minDepthTree.js";
import { describe, expect, test } from '@jest/globals';

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

describe('Describe Cases', () => {

    test('Test 1', () => { 
        const tree = new TreeNode(3);
        tree.left = new TreeNode(9);
        tree.right = new TreeNode(20);
        tree.right.left = new TreeNode(15);
        tree.right.right = new TreeNode(7);

        expect(minDepth(tree)).toBe(2)
    })

    test('Test 2', () => { 
        
        const tree = new TreeNode(2);
        tree.left = new TreeNode(3);
        tree.left.left = new TreeNode(4);
        tree.left.left.left = new TreeNode(5);
        tree.left.left.left.left = new TreeNode(6);

        expect(minDepth(tree)).toBe(5)
    })

})