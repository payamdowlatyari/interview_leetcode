import { swapPairs } from "./swapPairs.js";
import { ListNode } from "./node/ListNode.js";
import { linkedListToArray } from "./helpers/linkedListToArray.js";

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

describe('Swap Nodes in Pairs', () => {

    test('Test 1', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);

        const result = swapPairs(head);
        expect(linkedListToArray(result)).toEqual([2, 1, 4, 3]);
    });

    test('Test 2', () => {
        const result = swapPairs(null);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test('Test 3', () => {
        const head = new ListNode(1);
        const result = swapPairs(head);
        expect(linkedListToArray(result)).toEqual([1]);
    });
});