import { middleNode } from "./middleNode";
import { ListNode } from "./data-structure/ListNode";
import { describe, expect, test } from "@jest/globals";

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

describe("Middle Node Tests", () => {
  test("Test 1", () => {
    const head1 = new ListNode(1);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(3);
    head1.next.next.next = new ListNode(4);
    head1.next.next.next.next = new ListNode(5);

    const result1 = middleNode(head1);
    expect(result1).toEqual(head1.next.next);
  });

  test("Test 2", () => {
    const head2 = new ListNode(1);
    head2.next = new ListNode(2);
    head2.next.next = new ListNode(3);
    head2.next.next.next = new ListNode(4);
    head2.next.next.next.next = new ListNode(5);
    head2.next.next.next.next.next = new ListNode(6);

    const result2 = middleNode(head2);
    expect(result2).toEqual(head2.next.next.next);
  });
});
