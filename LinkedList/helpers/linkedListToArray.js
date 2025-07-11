import { ListNode } from "../data-structure/ListNode";

/**
 * Given the head of a linked list, convert it to an array.
 *
 * @param {ListNode} head The head of the linked list.
 * @returns {Array<number>} The array representation of the linked list.
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3)));
 * const arr = linkedListToArray(head);
 * console.log(arr); // Output: [1, 2, 3]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

/**
 * Given an array, convert it to a linked list.
 *
 * @param {Array<number>} arr The array to convert.
 * @returns {ListNode} The head of the linked list.
 *
 * @example
 * const arr = [1, 2, 3];
 * const head = arrayToLinkedList(arr);
 * console.log(head); // Output: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: null } } }
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function arrayToLinkedList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return dummy.next;
}

/**
 * Prints the values of the nodes in the linked list.
 *
 * @param {ListNode} head The head of the linked list.
 * @returns {void}
 *
 * @example
 * const head = new ListNode(1, new ListNode(2, new ListNode(3)));
 * printLinkedList(head); // Output: 1 -> 2 -> 3
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function printLinkedList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}
