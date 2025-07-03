import { TreeNode } from "./node/TreeNode.js";

// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * Time complexity: O(n) where n is the number of nodes in the tree
 * Space complexity: O(n) where n is the number of nodes in the tree
 */
export function rightSideView(root) {
  
    if (!root) return [];  
  
    let queue = [root], result = []

    while (queue.length > 0) {
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
          let curr = queue.shift()

          if (i === levelSize - 1)
            result.push(curr.val)

          if (curr.left) 
            queue.push(curr.left)
                      
          if (curr.right) 
            queue.push(curr.right)
      }
    }
    return result;
};