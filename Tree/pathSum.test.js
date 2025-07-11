import { TreeNode } from "./node/TreeNode";
import { hasPathSum } from "./pathSum";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:
// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

describe("Describe Cases", () => {
  const tree = new TreeNode(5);
  tree.left = new TreeNode(4);
  tree.right = new TreeNode(8);
  tree.left.left = new TreeNode(11);
  tree.right.left = new TreeNode(13);
  tree.right.right = new TreeNode(4);
  tree.left.left.left = new TreeNode(7);
  tree.left.left.right = new TreeNode(2);
  tree.right.right.left = new TreeNode(1);

  test("Test 1", () => {
    expect(hasPathSum(tree, 22)).toBe(true);
  });

  test("Test 2", () => {
    expect(hasPathSum(tree, 5)).toBe(false);
  });

  test("Test 3", () => {
    expect(hasPathSum(tree, 0)).toBe(false);
  });
});
