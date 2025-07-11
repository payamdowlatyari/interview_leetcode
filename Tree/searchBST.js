import { TreeNode } from "./data-structure/TreeNode";

// Search in a Binary Search Tree

// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree
// rooted with that node. If such a node does not exist, return null.

// Constraints:
// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Searches a binary search tree for a node with a given value and returns the node.
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * 
 * @example
 * Input: root = [4,2,7,1,3], val = 2
 * Output: [2,1,3]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function searchBST(root, val) {
  if (!root) return root;

  if (root.val === val) return root;

  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
}
