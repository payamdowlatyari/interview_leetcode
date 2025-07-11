import { TreeNode } from "../data-structure/TreeNode";

/**
 * Converts a binary tree to an array using pre-order traversal.
 * This traversal visits the root node, then the nodes in the left subtree,
 * and finally the nodes in the right subtree.
 *
 * @param {TreeNode} root - The root node of the binary tree
 * @return {Array} An array containing the values of the nodes visited in pre-order
 *
 * @example
 * const root = new TreeNode(1);
 * root.left = new TreeNode(2);
 * root.right = new TreeNode(3);
 * preOrderTraversal(root); // [1, 2, 3]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function preOrderTraversal(root) {
  if (!root) return [];

  const result = [root.val];
  result.push(...preOrderTraversal(root.left));
  result.push(...preOrderTraversal(root.right));

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
 * @example
 * const root = new TreeNode(1);
 * root.left = new TreeNode(2);
 * root.right = new TreeNode(3);
 * inOrderTraversal(root); // [2, 1, 3]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function inOrderTraversal(root) {
  if (!root) return [];

  const result = [];
  result.push(...inOrderTraversal(root.left));
  result.push(root.val);
  result.push(...inOrderTraversal(root.right));
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
 * @example
 * const root = new TreeNode(1);
 * root.left = new TreeNode(2);
 * root.right = new TreeNode(3);
 * postOrderTraversal(root); // [2, 3, 1]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function postOrderTraversal(root) {
  if (!root) return [];

  const result = [];
  result.push(...postOrderTraversal(root.left));
  result.push(...postOrderTraversal(root.right));
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
 * @example
 * const root = new TreeNode(1);
 * root.left = new TreeNode(2);
 * root.right = new TreeNode(3);
 * root.left.left = new TreeNode(4);
 * root.left.right = new TreeNode(5);
 * breadthFirstTraversal(root); // [1, 2, 3, 4, 5]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function breadthFirstTraversal(tree) {
  if (!tree) return [];
  let queue = [tree];
  let result = [];
  while (queue.length > 0) {
    let item = queue.shift();
    result.push(item.val);
    if (!item.left && !item.right) {
      continue;
    }
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
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
 * @example
 * const root = new TreeNode(1);
 * root.left = new TreeNode(2);
 * root.right = new TreeNode(3);
 * root.left.left = new TreeNode(4);
 * root.left.right = new TreeNode(5);
 * depthFirstTraversal(root); // [1, 2, 4, 5, 3]
 *
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function depthFirstTraversal(tree) {
  if (!tree) return [];
  let stack = [tree];
  let result = [];
  while (stack.length > 0) {
    let item = stack.pop();
    result.push(item.val);
    if (!item.left && !item.right) {
      continue;
    }
    if (item.right) {
      stack.push(item.right);
    }
    if (item.left) {
      stack.push(item.left);
    }
  }
  return result;
}

/**
 * Draws a binary tree in a matrix-like representation and logs it to the console.
 * The tree is visualized in a 2D grid where each node is placed in a specific
 * position based on its depth and horizontal distance from the root.
 *
 * @example
 *       2
 *      / \
 *     1   3
 *    / \
 *   4   5
 *  / \ / \
 * 6  7 8  9
 *
 * @param {TreeNode} tree - The root node of the binary tree to be drawn.
 * @param {number} len - The length of the grid to draw the tree in.
 *
 * Note: This function assumes the tree's height and width fit within a 10x10 grid.
 * Nodes are represented by their values, and their positions are adjusted to
 * visualize the tree's structure.
 */
export function drawTree(tree, len = 10) {
  const drawMatrix = Array.from({ length: len }, () => Array(len).fill(" "));

  function drawNode(node, x, y) {
    if (
      !node ||
      y < 0 ||
      y >= drawMatrix.length ||
      x < 0 ||
      x >= drawMatrix[0].length
    )
      return;
    drawMatrix[y][x] = node.val;
    drawNode(node.left, x - 1, y + 1);
    drawNode(node.right, x + 1, y + 1);
  }

  drawNode(tree, 4, 0); // Start drawing from a central position

  drawMatrix.forEach((row) => console.log(row.join(" ")));
}
