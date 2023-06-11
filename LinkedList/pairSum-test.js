import pairSum from "./pairSum.js";
import ListNode from "./ListNode.js";
import printLinkedList from "./printLinkedList.js";

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

(() => {

    let list1 = new ListNode(5);
    list1.next = new ListNode(4);
    list1.next.next = new ListNode(2);
    list1.next.next.next = new ListNode(1);

let tail1 = list1.next.next.next;

    console.log('------1-----');
    console.log('list:');
    console.log(printLinkedList(list1));
    console.log('------------');
    console.log('pairSum:');
    console.log(pairSum(list1));
    console.log('------------');
    console.log();

let list2 = new ListNode(4);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(2);
    list2.next.next.next = new ListNode(3);


let tail2 = list2.next;

    console.log('------2-----');
    console.log('list:');
    console.log(printLinkedList(list2));
    console.log('------------');
    console.log('pairSum:');
    console.log(pairSum(list2));
    console.log('------------');
    console.log();

let list3 = new ListNode(1);
    list3.next = new ListNode(100000);

    console.log('------3-----');
    console.log('list:');
    console.log(printLinkedList(list3));
    console.log('------------');
    console.log('pairSum:');
    console.log(pairSum(list3));
    console.log('------------');
    console.log();


})();