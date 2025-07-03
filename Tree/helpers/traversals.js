import { TreeNode } from "../node/TreeNode.js";

/**
 * Converts a binary tree to an array using pre-order traversal.
 * This traversal visits the root node, then the nodes in the left subtree,
 * and finally the nodes in the right subtree.
 *
 * @param {TreeNode} root - The root node of the binary tree
 * @return {Array} An array containing the values of the nodes visited in pre-order
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function preOrderTravarsal(root) {
    if (!root) return [];

    const result = [root.val];
    result.push(...preOrderTravarsal(root.left));
    result.push(...preOrderTravarsal(root.right));

    return result;
}

/**
 * Performs an in-order traversal on a binary tree.
 * This traversal visits the nodes in the left subtree, 
 * then the root node, and finally the nodes in the right subtree.
 *
 * @param {TreeNode} root - The root node of the binary tree
 * @return {Array} An array containing the values of the nodes visited in in-order
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function inOrderTravarsal(root){

    if (!root) return [];

    const result = [];
    result.push(...inOrderTravarsal(root.left));
    result.push(root.val);
    result.push(...inOrderTravarsal(root.right));
    return result;
}

/**
 * Performs a post-order traversal on a binary tree.
 * This traversal visits the nodes in the left subtree,
 * then the nodes in the right subtree, and finally the root node.
 *
 * @param {TreeNode} root - The root node of the binary tree
 * @return {Array} An array containing the values of the nodes visited in post-order
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function postOrderTravarsal(root){
   
    if (!root) return [];

    const result = [];
    result.push(...postOrderTravarsal(root.left));
    result.push(...postOrderTravarsal(root.right));
    result.push(root.val);

    return result;
}

/**
 * Converts a tree to an array in a breadth-first order
 * This traversal visits nodes from left to right, starting from the root node
 * 
 * @param {TreeNode} tree - The root node of the binary tree
 * @return {Array} An array containing the values of the nodes visited in breadth-first order
 * 
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function breadthFirstTraversal(tree) {
    if (!tree) return [];  
    let queue = [tree];
    let result = [];
    while (queue.length > 0) {
        let item = queue.shift()
        result.push(item.val);
        if (!item.left && !item.right) {
            continue
        }
        if (item.left) {
            queue.push(item.left)
        }
        if (item.right) {
            queue.push(item.right)
        }
    }
    return result;
}


/**
 * Performs a depth-first traversal on a binary tree and returns an array of node values.
 * This traversal visits the root node first, then the nodes in the left subtree, 
 * and finally the nodes in the right subtree.
 *
 * @param {TreeNode} tree - The root node of the binary tree to traverse.
 * @return {Array} An array containing the values of the nodes visited in depth-first order.
 * 
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function depthFirstTraversal(tree) {
    if (!tree) return [];
    let stack = [tree];
    let result = [];
    while (stack.length > 0) {
        let item = stack.pop()
        result.push(item.val);
        if (!item.left && !item.right) {
            continue
        }
        if (item.right) {
            stack.push(item.right)
        }
        if (item.left) {
            stack.push(item.left)
        }
    }
    return result;
}