import { TreeNode } from "./data-structure/TreeNode";

// Given a binary tree, determine if it is height-balanced.

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -10^4 <= Node.val <= 10^4

/**
 * Calculates the height of a binary tree.
 *
 * @param {TreeNode} root - The root of the tree
 * @return {number} The height of the tree
 */
const height = (root) => {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
};

/**
 * Checks if a binary tree is balanced.
 *
 * @param {TreeNode} root
 * @return {boolean}
 *
 * @example
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function isBalanced(root) {
  if (!root) return true;
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
