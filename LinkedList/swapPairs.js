import { ListNode } from "./data-structure/ListNode";
// Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes
// (i.e., only nodes themselves may be changed.)

// Constraints:
// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Swaps every two adjacent nodes in a linked list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
 * const result = swapPairs(head);
 * console.log(linkedListToArray(result)); // Output: [2, 1, 4, 3]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function swapPairs(head) {
  const temp = new ListNode(0);
  temp.next = head;

  let curr = temp;

  while (curr.next !== null && curr.next.next !== null) {
    const node1 = curr.next;
    const node2 = curr.next.next;

    node1.next = node2.next;
    node2.next = node1;
    curr.next = node2;

    curr = node1;
  }

  return temp.next;
}
