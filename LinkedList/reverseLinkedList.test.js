import { reverseBetween } from "./reverseLinkedList";
import { ListNode } from "./node/ListNode";
import { linkedListToArray } from "./helpers/linkedListToArray";
import { describe, expect, test } from "@jest/globals";

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

describe("Reverse Linked List II Tests", () => {
  test("Test 1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const result = reverseBetween(head, 2, 4);
    expect(linkedListToArray(result)).toEqual([1, 4, 3, 2, 5]);
  });

  test("Test 2", () => {
    const head = new ListNode(5);

    const result = reverseBetween(head, 1, 1);
    expect(linkedListToArray(result)).toEqual([5]);
  });
});
