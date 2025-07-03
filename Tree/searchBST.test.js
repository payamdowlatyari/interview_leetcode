import { searchBST } from "./searchBST.js";
import  { TreeNode }  from "./node/TreeNode.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

describe('Describe Cases', () => { 

    const tree = new TreeNode(4);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(7);
    tree.left.left = new TreeNode(1);
    tree.left.right = new TreeNode(3);

    let val1 = 2, val2 = 5

    test('Test 1', () => { 
        const node = searchBST(tree, val1)
        expect(node).toBe(tree.left)
    })

    test('Test 2', () => { 
        const node = searchBST(tree, val2)
        expect(node).toBe(null)
    })
});



 