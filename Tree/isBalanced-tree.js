// Given a binary tree, determine if it is height-balanced.

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -10^4 <= Node.val <= 10^4


const height = (root) => {
    if (!root) return 0;
    return Math.max(height(root.left), height(root.right)) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function isBalanced(root) {

    if (root) return true;

    let left_height = height(root.left);
    let right_height = height(root.right);

    if (Math.abs(left_height - right_height) <= 1 && isBalanced(root.left) && isBalanced(root.right)) 
        return true;

    return false;
};