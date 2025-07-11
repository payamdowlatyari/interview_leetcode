import { TreeNode } from "./data-structure/TreeNode";
import { isValidBST } from "./isValidTree";
import { expect, test, describe } from "@jest/globals";

// Example 1:

//      2
//     / \
//    1   3

// Input: root = [2,1,3]
// Output: true

// Example 2:

//          5
//         / \
//        1   4
//           / \
//          3   6

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

describe("Describe Cases", () => {
  test("Test 1", () => {
    const tree = new TreeNode(2);
    tree.left = new TreeNode(1);
    tree.right = new TreeNode(3);
    const node = isValidBST(tree);
    expect(node).toBe(true);
  });

  test("Test 2", () => {
    const tree = new TreeNode(5);
    tree.left = new TreeNode(1);
    tree.right = new TreeNode(4);
    tree.right.left = new TreeNode(3);
    tree.right.right = new TreeNode(6);
    const node = isValidBST(tree);
    expect(node).toBe(false);
  });
});
