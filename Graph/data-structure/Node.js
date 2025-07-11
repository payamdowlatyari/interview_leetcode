/**
 * Definition for a Node.
 *
 * @param {number} val
 * @param {Node[]} neighbors
 *
 * @example
 * const node = new Node(1, []);
 * node.val; // 1
 * node.neighbors; // []
 *
 */
export class Node {
  /**
   * Constructs a new Node.
   */
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}
