import { MyStack, MyQueue } from "./queueToStack";
import { describe, expect, test } from "@jest/globals";

// Example 1:
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Example 2:
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

describe("Describe Cases MyStack", () => {
  const myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);

  var item1 = myStack.top();
  test("Test 1", () => {
    expect(item1).toBe(2);
  });

  var item2 = myStack.pop();
  test("Test 2", () => {
    expect(item2).toBe(2);
  });

  test("Test 3", () => {
    expect(myStack.empty()).toBe(false);
  });
});

describe("Describe Cases MyQueue", () => {
  const myQueue = new MyQueue();
  myQueue.push(1);
  myQueue.push(2);

  var item1 = myQueue.peek();
  test("Test 1", () => {
    expect(item1).toBe(1);
  });

  var item2 = myQueue.pop();
  test("Test 2", () => {
    expect(item2).toBe(1);
  });

  test("Test 3", () => {
    expect(myQueue.empty()).toBe(false);
  });
});
