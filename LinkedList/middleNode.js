import { ListNode } from "./node/ListNode";

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Returns the middle node of a linked list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3)));
 * const middle = middleNode(head);
 * console.log(middle.val); // Output: 2
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function middleNode(head) {
  let count = 0;
  let curr = head;

  while (curr) {
    count++;
    curr = curr.next;
  }

  let half = Math.floor(count / 2);
  curr = head;

  while (half > 0) {
    curr = curr.next;
    half--;
  }

  return curr;
}
