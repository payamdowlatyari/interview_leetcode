import { TreeNode } from "./node/TreeNode";

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Constraints:

// The number of nodes in the tree is in the range [0, 10^5].
// -1000 <= Node.val <= 1000

/**
 * Finds the minimum depth of a binary tree.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * @param {TreeNode} root - the root of the binary tree
 * @return {number} the minimum depth of the tree
 * 
 * @example
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function minDepth(root) {
  if (!root) return 0;

  let leftDepth = minDepth(root.left);
  let rightDepth = minDepth(root.right);

  if (leftDepth === 0 || rightDepth === 0) {
    return 1 + Math.max(leftDepth, rightDepth);
  }

  return 1 + Math.min(leftDepth, rightDepth);
}
