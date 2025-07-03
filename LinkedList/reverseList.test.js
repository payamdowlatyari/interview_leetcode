import { reverseList } from "./reverseList.js";
import { ListNode } from "./node/ListNode.js";
import { linkedListToArray } from "./helpers/linkedListToArray.js";

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

describe('Reverse Linked List Tests', () => {

    test('Test 1', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        const result = reverseList(head);
        expect(linkedListToArray(result)).toEqual([5, 4, 3, 2, 1]);
    });

    test('Test 2', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);

        const result = reverseList(head);
        expect(linkedListToArray(result)).toEqual([2, 1]);
    });

    test('Test 3', () => {
        const result = reverseList(null);
        expect(linkedListToArray(result)).toEqual([]);
    });
});