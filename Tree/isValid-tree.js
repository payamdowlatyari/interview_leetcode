// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -2 ^ 31 <= Node.val <= 2 ^ 31 - 1

const isSmaller = (node, value) => {

    if (!node) return true;

    if (node.val >= value) return false;

    return (isSmaller(node.left, value) && isSmaller(node.right, value));
} 

const isLarger = (node, value) => {

    if (!node) return true;

    if (node.val <= value) return false;

    return (isLarger(node.left, value) && isLarger(node.right, value));
} 

const isValidBST = function(root) {
    
    if (!root) return true;

    if (!(isSmaller(root.left, root.val) && isLarger(root.right, root.val))) 
        return false;

    return (isValidBST(root.left) && isValidBST(root.right));
};

export default isValidBST;