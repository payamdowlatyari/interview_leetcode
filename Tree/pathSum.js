import { TreeNode } from "./node/TreeNode";

// Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that
// adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

/**
 * Checks if the tree has a root-to-leaf path that adds up to the target sum.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 
 * @example
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
