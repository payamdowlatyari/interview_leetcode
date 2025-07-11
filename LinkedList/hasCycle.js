import { ListNode } from "./node/ListNode";

// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list
// that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next
// pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Constraints:

// The number of the nodes in the list is in the range [0, 10^4].
// -10^5 <= Node.val <= 10^5
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {boolean}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3)));
 * console.log(hasCycle(head)); // Output: false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function hasCycle(head) {
  if (!head) return false;

  let curr = head;
  let temp = [];

  let i = 0;
  temp[i] = head;

  while (curr.next) {
    if (temp.includes(curr.next)) return true;
    i++;
    temp[i] = curr.next;
    curr = curr.next;
  }
  return false;
}
