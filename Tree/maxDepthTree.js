import { TreeNode } from "./data-structure/TreeNode";

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100

/**
 * Finds the maximum depth of a binary tree.
 *
 * @param {TreeNode} root - the root of the binary tree
 * @return {number} the maximum depth of the tree
 *
 * @example
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(1)
 */
export function maxDepth(root) {
  if (!root) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
