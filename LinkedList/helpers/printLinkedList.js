/**
 * Prints the elements of a linked list.
 * @param {Object} head - The head of the list.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function printLinkedList(head) {
  if (head) {
    let curr = head;

    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}
