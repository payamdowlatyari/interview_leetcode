import { TreeNode } from "./node/TreeNode";

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 
// Follow up: Could you solve it both recursively and iteratively?

/**
 * Checks if a binary tree is symmetric.
 * @param {TreeNode} root The root of the tree to check.
 * @returns {boolean} True if the tree is symmetric, false otherwise.
 */
export function isSymmetric(root) {
    if (!root || (!root.left && !root.right)) return true;
    if (!root.left || !root.right) return false;
    const stack = [[root.left, root.right]];
    while (stack.length) {
        const [left, right] = stack.pop();
        if (left.val !== right.val) return false;
        if (left.left && right.right) stack.push([left.left, right.right]);
        else if (left.left || right.right) return false;
        if (left.right && right.left) stack.push([left.right, right.left]);
        else if (left.right || right.left) return false;
    }
    return true;
}
