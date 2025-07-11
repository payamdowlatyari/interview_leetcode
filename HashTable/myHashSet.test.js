import { HashTable } from "./myHashSet";
import { expect, test, describe, beforeEach } from "@jest/globals";

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)

describe("HashTable", () => {
  let myHashSet;

  beforeEach(() => {
    myHashSet = new HashTable(10);
  });

  test("Example 1", () => {
    myHashSet.add(1);
    myHashSet.add(2);
    expect(myHashSet.contains(1)).toBe(true);
    expect(myHashSet.contains(3)).toBe(false);
    myHashSet.add(2);
    expect(myHashSet.contains(2)).toBe(true);
    myHashSet.remove(2);
    expect(myHashSet.contains(2)).toBe(false);
  });

  test("Example 2", () => {
    myHashSet.add(1);
    expect(myHashSet.contains(1)).toBe(true);
    myHashSet.remove(1);
    expect(myHashSet.contains(1)).toBe(false);
  });

  test("Example 3", () => {
    expect(myHashSet.contains(1)).toBe(false);
  });

  test("Example 4", () => {
    myHashSet.add(1);
    myHashSet.add(2);
    myHashSet.add(3);
    expect(myHashSet.contains(1)).toBe(true);
    expect(myHashSet.contains(2)).toBe(true);
    expect(myHashSet.contains(3)).toBe(true);
    myHashSet.remove(2);
    expect(myHashSet.contains(2)).toBe(false);
  });
});
