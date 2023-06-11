// In a linked list of size n, where n is even, the ith node (0-indexed) 
// of the linked list is known as the twin of the (n-1-i)th node, 
// if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. 
// These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, 
// return the maximum twin sum of the linked list.

// Constraints:

// The number of nodes in the list is an even integer in the range [2, 10^5].
// 1 <= Node.val <= 10^5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
export default function pairSum(head){

    let list = [];

    let curr = head;

    while (curr) {
        list.push(curr.val);
        curr = curr.next; 
    }

    let i = 0;
    let j = list.length - 1;

    let max = list[i] + list[j];

    while (i < j) {

        if (list[i] + list[j] > max) 
            max = list[i] + list[j];

        i++;
        j--;
    }

    return max;

};