import { TreeNode } from "./node/TreeNode";

// Given the root of a binary search tree, and an integer k, return the kth smallest 
// value (1-indexed) of all the values of the nodes in the tree.

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104


// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) 
// and you need to find the kth smallest frequently, how would you optimize?
/**
 * Find the kth smallest value in a binary search tree.
 * 
 * @param {TreeNode} root - The root of the binary search tree.
 * @param {number} k - The kth position to find.
 * @return {number} - The kth smallest value in the BST.
 * 
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(h) where h is the height of the tree (O(log n) for balanced trees)
 */
export function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    /**
     * A helper function to do an in-order traversal of the tree.
     * We stop traversing the tree as soon as we have found the kth smallest value.
     * 
     * @param {TreeNode} node - The current node being traversed.
     */
    function inorder(node) {
        if (!node || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
}