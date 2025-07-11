import { ListNode } from "./node/ListNode";

// Given the head of a linked list and a value x, partition it such that
// all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

/**
 * Definition for singly-linked list.
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 *
 * @example
 * const head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))));
 * const x = 3;
 * const result = partitionList(head, x);
 * console.log(linkedListToArray(result)); // Output: [1, 2, 2, 4, 3, 5]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function partitionList(head, x) {
  const smaller = new ListNode(0);
  const larger = new ListNode(0);
  let smallerHead = smaller;
  let largerHead = larger;

  while (head) {
    if (head.val < x) {
      smallerHead.next = head;
      smallerHead = smallerHead.next;
    } else {
      largerHead.next = head;
      largerHead = largerHead.next;
    }
    head = head.next;
  }

  smallerHead.next = larger.next;
  largerHead.next = null;
  return smaller.next;
}
