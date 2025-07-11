import { TreeNode } from "./data-structure/TreeNode";

// Consider all the leaves of a binary tree, from left to right order,
// the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Constraints:
// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values in the range [0, 200].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Checks if two binary trees are leaf-similar.
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 *
 * @example
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function leafSimilar(root1, root2) {
  /**
   * Recursively collects the leaf nodes' values of a binary tree.
   *
   * @param {TreeNode} node - The current node in the binary tree.
   * @param {number[]} leaves - An array to store the values of the leaf nodes.
   * @returns {number[]} An array containing the values of the leaf nodes.
   */
  const getLeaves = (node, leaves = []) => {
    if (!node) return leaves;
    if (!node.left && !node.right) {
      leaves.push(node.val);
    } else {
      getLeaves(node.left, leaves);
      getLeaves(node.right, leaves);
    }
    return leaves;
  };

  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);

  return JSON.stringify(leaves1) === JSON.stringify(leaves2);
}
