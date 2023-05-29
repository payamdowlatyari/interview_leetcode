// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100

/**
 * @param {TreeNode} root
 * @return {number}
 */

const max = (a, b) => {
    if (a < b) return b;
    return a;
}

const hasChild = (root) => {
    if (!root) 
        return 0;

    if (!root.left && !root.right) 
        return 1;

    return max(hasChild(root.left) , hasChild(root.right)) + 1;
}

export default function maxDepth(root) {
  
    return hasChild(root);
    
};