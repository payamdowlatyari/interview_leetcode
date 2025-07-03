import { ListNode } from "../node/ListNode";

/**
 * Given the head of a linked list, convert it to an array.
 *
 * @param {ListNode} head The head of the linked list.
 * @returns {Array<number>} The array representation of the linked list.
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
