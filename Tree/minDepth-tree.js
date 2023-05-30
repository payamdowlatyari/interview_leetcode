// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Constraints:

// The number of nodes in the tree is in the range [0, 10^5].
// -1000 <= Node.val <= 1000

/**
 * @param {TreeNode} root
 * @return {number}
 */

const min = (a, b) => {
    if (a > b) return b;
    return a;
}

export default function minDepth(root) { 

    if (!root) return 0;

    if (root.left === null && root.right === null)
    return 1;   
    
    if (!root.left)
        return 1 + minDepth(root.right);

    else if (!root.right)
        return 1 + minDepth(root.left);
    
   else return 1 + min(minDepth(root.right), minDepth(root.left));  
};