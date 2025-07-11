import { partitionList } from "./partitionList";
import { ListNode } from "./data-structure/ListNode";
import { linkedListToArray } from "./helpers/linkedListToArray";
import { describe, test, expect } from "@jest/globals";

// Example 1:
// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]

// Example 2:
// Input: head = [2,1], x = 2
// Output: [1,2]

describe("Partition List Tests", () => {
  test("Test 1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(4);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(2);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(2);

    const result = partitionList(head, 3);
    expect(linkedListToArray(result)).toEqual([1, 2, 2, 4, 3, 5]);
  });

  test("Test 2", () => {
    const head = new ListNode(2);
    head.next = new ListNode(1);

    const result = partitionList(head, 2);
    expect(linkedListToArray(result)).toEqual([1, 2]);
  });
});
