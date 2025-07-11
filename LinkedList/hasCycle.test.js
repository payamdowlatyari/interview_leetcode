import { ListNode } from "./data-structure/ListNode";
import { hasCycle } from "./hasCycle";
import { describe, expect, test } from "@jest/globals";

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

describe("Linked List Cycle Detection", () => {
  test("Test 1", () => {
    const head1 = new ListNode(3);
    head1.next = new ListNode(2);
    head1.next.next = new ListNode(0);
    head1.next.next.next = new ListNode(-4);
    head1.next.next.next.next = head1.next; // Creates a cycle

    const result1 = hasCycle(head1);
    expect(result1).toBe(true);
  });

  test("Test 2", () => {
    const head2 = new ListNode(1);
    head2.next = new ListNode(2);
    head2.next.next = head2; // Creates a cycle

    const result2 = hasCycle(head2);
    expect(result2).toBe(true);
  });

  test("Test 3", () => {
    const head3 = new ListNode(1); // Single node, no cycle

    const result3 = hasCycle(head3);
    expect(result3).toBe(false);
  });
});
