import { TreeNode } from "./data-structure/TreeNode";

// Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

/**
 * Calculates the diameter of a binary tree.
 * The diameter is the length of the longest path between any two nodes in the tree.
 *
 * @param {TreeNode} root
 * @return {number}
 *
 * @example
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function diameterOfBinaryTree(root) {
  let diameter = 0;

  /**
   * Calculates the height of a binary tree.
   * This function is used in the calculation of the diameter of the tree.
   * It uses a recursive approach to calculate the height of the tree.
   * @param {TreeNode} node - The current node to calculate the height of
   * @return {number} The height of the subtree with node as the root.
   */
  const height = (node) => {
    if (node === null) return 0;

    const left = height(node.left);
    const right = height(node.right);

    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  };

  height(root);
  return diameter;
}
