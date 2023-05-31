import ListNode from "./ListNode.js";
import hasCycle from "./hasCycle.js";
import printLinkedList from "./printLinkedList.js";

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

const hasCycleTest = () => {

    let list1 = new ListNode(3);
        list1.next = new ListNode(2);
        list1.next.next = new ListNode(0);
        list1.next.next.next = new ListNode(-4);

    let tail1 = list1.next.next.next;
        tail1.next = list1.next.next;

        console.log('------1-----');
        console.log('list:');
        console.log(list1);
        console.log('------------');
        console.log('has cycle:');
        console.log(hasCycle(list1));
        console.log('------------');
        console.log();

    let list2 = new ListNode(1);
        list2.next = new ListNode(2);

    let tail2 = list2.next;
        tail2.next = list2;

        console.log('------2-----');
        console.log('list:');
        console.log(list2);
        console.log('------------');
        console.log('has cycle:');
        console.log(hasCycle(list2));
        console.log('------------');
        console.log();

    let list3 = new ListNode(1);

        console.log('------3-----');
        console.log('list:');
        console.log(list3);
        console.log('------------');
        console.log('has cycle:');
        console.log(hasCycle(list3));
        console.log('------------');
        console.log();


};

hasCycleTest();