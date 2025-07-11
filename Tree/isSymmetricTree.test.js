import { TreeNode } from "./node/TreeNode";
import { isSymmetric } from "./isSymmetricTree";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

describe("Describe Cases", () => {
  test("Test 1", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(2);
    tree.left.left = new TreeNode(3);
    tree.left.right = new TreeNode(4);
    tree.right.left = new TreeNode(4);
    tree.right.right = new TreeNode(3);
    expect(isSymmetric(tree)).toBe(true);
  });

  test("Test 2", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(2);
    tree.left.right = new TreeNode(3);
    tree.right.right = new TreeNode(3);
    expect(isSymmetric(tree)).toBe(false);
  });
});
