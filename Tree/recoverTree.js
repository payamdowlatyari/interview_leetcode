import { TreeNode } from "./node/TreeNode.js";

// You are given the root of a binary search tree (BST), where the values of
// exactly two nodes of the tree were swapped by mistake.
// Recover the tree without changing its structure.

/**
 * Finds the first node in the tree which has a value greater than the given value.
 * If the node is found, it is returned. If not, the function returns null.
 * @param {TreeNode} node - The node to search from
 * @param {number} value - The value to search for
 * @return {TreeNode} The first node which has a value greater than the given value, or null if none is found
 */
const greaterThan = (node, value) => {

    if (node) {
        if (node.val > value) {        
            if (node.left && greaterThan(node.left, value)) {
                if (node.val < greaterThan(node.left, value).val)
                    return greaterThan(node.left, value); 
                return node;
            }
            if (node.right && greaterThan(node.right, value)) {
                if (node.val < greaterThan(node.right, value).val) 
                    return greaterThan(node.right, value);
                return node;
            }
        }
        return node;
    } 
    return null;
}

/**
 * Finds the first node in the tree which has a value less than the given value.
 * If the node is found, it is returned. If not, the function returns null.
 * @param {TreeNode} node - The node to search from
 * @param {number} value - The value to search for
 * @return {TreeNode} The first node which has a value less than the given value, or null if none is found
 */
const LessThan = (node, value) => {

    if (node) {

        if (node.val < value) {

            if (node.left && LessThan(node.left, value)) {
                if (node.val > LessThan(node.left, value).val) 
                    return LessThan(node.val, value);    
                return node;
            }
            if (node.right && LessThan(node.right, value)) {
                if (node.val > LessThan(node.right, value).val) 
                    return LessThan(node.right, value);
                return node;
            }
        }
        return node;
    }
    return null;
}

/**
 * Recovers a binary search tree from a tree which has exactly two nodes with their values swapped.
 * The function works by traversing the tree, and whenever it finds a node which has a value less
 * than the given value, it swaps the value of the current node with the value of the found node.
 * @param {TreeNode} root - The root of the tree to recover
 * 
 */
export function recoverTree(root) {

    if (!root) return;

    const first = LessThan(root, root.val);
    const second = greaterThan(root, root.val);

    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }

    recoverTree(root.left);
    recoverTree(root.right);
};