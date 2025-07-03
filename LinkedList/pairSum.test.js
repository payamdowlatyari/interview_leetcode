import { pairSum } from "./pairSum.js";
import { ListNode } from "./node/ListNode.js";

// Example 1:

// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6. 

// Example 2:

// Input: head = [4,2,2,3]
// Output: 7
// Explanation:
// The nodes with twins present in this linked list are:
// - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
// - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 

// Example 3:

// Input: head = [1,100000]
// Output: 100001
// Explanation:
// There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

describe('Pair Sum Tests', () => {

    test('Test 1', () => {
        const head1 = new ListNode(5);
        head1.next = new ListNode(4);
        head1.next.next = new ListNode(2);
        head1.next.next.next = new ListNode(1);

        const result1 = pairSum(head1);
        expect(result1).toEqual(6);
    });

    test('Test 2', () => {
        const head2 = new ListNode(4);
        head2.next = new ListNode(2);
        head2.next.next = new ListNode(2);
        head2.next.next.next = new ListNode(3);

        const result2 = pairSum(head2);
        expect(result2).toEqual(7);
    });

    test('Test 3', () => {
        const head3 = new ListNode(1);
        head3.next = new ListNode(100000);

        const result3 = pairSum(head3);
        expect(result3).toEqual(100001);
    });
});