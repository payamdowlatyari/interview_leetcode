import { cloneGraph } from "./cloneGraph";
import { Node } from "./node/Node";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Example 2:

// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list.
// The graph consists of only one node with val = 1 and it does not have any neighbors.

// Example 3:

// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.

describe("cloneGraph", () => {
  test("cloneGraph", () => {
    expect(
      cloneGraph(new Node(1, [new Node(2, [new Node(4)]), new Node(4)])),
    ).toEqual(new Node(1, [new Node(2, [new Node(4)]), new Node(4)]));
  });
  test("cloneGraph", () => {
    expect(cloneGraph(new Node(1))).toEqual(new Node(1));
  });
  test("cloneGraph", () => {
    expect(cloneGraph(null)).toEqual(null);
  });
});
