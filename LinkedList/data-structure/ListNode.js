/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {number} val
 * @return {ListNode}
 *
 * @example
 * const node = new ListNode(1);
 * console.log(node.val); // Output: 1
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
export class ListNode {
  /**
   * Creates a new ListNode.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
