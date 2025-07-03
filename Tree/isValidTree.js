// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -2 ^ 31 <= Node.val <= 2 ^ 31 - 1

/**
 * Given a node and a value, determines if all nodes in the node's tree have a value less than the given value.
 * @param {TreeNode} node - The node to check
 * @param {number} value - The value that all nodes should be less than
 * @return {boolean} true if all nodes in the tree have a value less than the given value, false otherwise
 */
const isSmaller = (node, value) => {

    if (!node) return true;

    if (node.val >= value) return false;

    return (isSmaller(node.left, value) && isSmaller(node.right, value));
} 

/**
 * Given a node and a value, determines if all nodes in the node's tree have a value greater than the given value.
 * @param {TreeNode} node - The node to check
 * @param {number} value - The value that all nodes should be greater than
 * @return {boolean} true if all nodes in the tree have a value greater than the given value, false otherwise
 */
const isLarger = (node, value) => {

    if (!node) return true;

    if (node.val <= value) return false;

    return (isLarger(node.left, value) && isLarger(node.right, value));
} 

/**
 * Determines if the given binary tree is a valid Binary Search Tree (BST).
 * A BST is a tree where all the values in the left subtree of a node are less than the node's value,
 * and all the values in the right subtree of a node are greater than the node's value.
 * @param {TreeNode} root - The root of the tree to check
 * @param {number} min - The minimum value allowed in the left subtree
 * @param {number} max - The maximum value allowed in the right subtree
 * @return {boolean} true if the tree is a valid BST, false otherwise
 */
export const isValidBST = (root, min = -Infinity, max = Infinity) => {
    
    if (!root) return true;

    if (root.val <= min || root.val >= max) return false;

    return (isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max));
};

