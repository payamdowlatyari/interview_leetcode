import { rightSideView } from "./rightSideView";
import { TreeNode } from "./node/TreeNode";
import { expect, test, describe } from "@jest/globals";

// Example 1:
//            1
//          /   \
//         2     3
//          \     \
//           5     4

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:
//            1
//              \
//               3
// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:
// Input: root = []
// Output: []

describe("Describe Cases", () => {
  test("Test 1", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    tree.right.left = new TreeNode(5);
    tree.right.right = new TreeNode(4);
    expect(rightSideView(tree)).toEqual([1, 3, 4]);
  });

  test("Test 2", () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(3);
    expect(rightSideView(tree)).toEqual([1, 3]);
  });

  test("Test 3", () => {
    const tree = new TreeNode(1);
    expect(rightSideView(tree)).toEqual([1]);
  });
});
