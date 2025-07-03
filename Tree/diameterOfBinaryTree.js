import { TreeNode } from "./node/TreeNode.js";

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
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function diameterOfBinaryTree(root) {
    
    let diameter = 0;

    const height = (node) => {
        if (node === null) return 0;
    
        const left = height(node.left);
        const right = height(node.right);
    
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    };

    height(root);
    return diameter;
};
