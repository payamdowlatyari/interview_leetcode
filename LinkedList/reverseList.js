import { ListNode } from "./node/ListNode";

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Reverses a singly linked list.
 * 
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function reverseList(head){

    if (!head) return null;

    let prev = null;
    let curr = head;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};


