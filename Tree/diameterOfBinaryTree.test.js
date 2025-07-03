import { diameterOfBinaryTree } from "./diameterOfBinaryTree.js";
import { breadthFirstTraversal } from "./helpers/traversals.js";
import { TreeNode } from "./node/TreeNode.js";

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:
// Input: root = [1,2]
// Output: 1

describe('Describe Cases', () => { 

    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);

    test('Test 1', () => { 
        const node = diameterOfBinaryTree(tree);
        expect(node).toBe(3);
    });

    test('Test 2', () => { 
        const node = breadthFirstTraversal(tree);
        expect(node).toEqual([1, 2, 3, 4, 5]);
    });

    test('Test 3', () => { 
        const node = diameterOfBinaryTree(null);
        expect(node).toBe(0);
    });

});