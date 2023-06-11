import reverseList from "./reverseList.js";
import ListNode from "./ListNode.js";
import printLinkedList from "./printLinkedList.js";

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

(()=> {

    let list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(3);
    list1.next.next.next = new ListNode(4);
    list1.next.next.next.next = new ListNode(5);

    console.log('------1-----');
    console.log('list:');
    printLinkedList(list1);
    console.log('------------');
    console.log('reverseList:');
    printLinkedList(reverseList(list1));
    console.log('------------');
    console.log();

let list2 = new ListNode(1);
    list2.next = new ListNode(2);


    console.log('------2-----');
    console.log('list:');
    printLinkedList(list2);
    console.log('------------');
    console.log('reverseList:');
    printLinkedList(reverseList(list2));
    console.log('------------');
    console.log();

let list3 = new ListNode();

    console.log('------3-----');
    console.log('list:');
    printLinkedList(list3);
    console.log('------------');
    console.log('reverseList:');
    printLinkedList(reverseList(list3));
    console.log('------------');
    console.log();

})();