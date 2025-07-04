/**
 * Definition for a binary tree node. 
 * @example
 * const node = new TreeNode(1, null, null);
 * node.val; // 1
 * node.left; // null
 * node.right; // null
 *
 * @param {number} val - The value of the node. Defaults to 0 if not provided.
 * @param {TreeNode|null} left - The left child of the node. Defaults to null if not provided.
 * @param {TreeNode|null} right - The right child of the node. Defaults to null if not provided.
 */
class TreeNode {
    /**
     * Constructs a new TreeNode.
     */
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
};

export { TreeNode };
