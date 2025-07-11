import { ListNode } from "./data-structure/ListNode";

// Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

// Constraints:
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

// Follow up: Could you do it in one pass?

/**
 * Reverses a linked list from left to right
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
 * const result = reverseBetween(head, 2, 4);
 * console.log(linkedListToArray(result)); // Output: [1, 4, 3, 2, 5]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function reverseBetween(head, left, right) {
  if (!head) return null;

  let curr = head;
  let prev = null;
  let count = 1;

  while (count < left) {
    prev = curr;
    curr = curr.next;
    count++;
  }

  const start = prev;
  const end = curr;

  while (count <= right) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  if (start) start.next = prev;
  end.next = curr;

  if (left === 1) return prev;
  return head;
}
