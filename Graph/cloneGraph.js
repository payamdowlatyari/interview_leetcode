import { Node } from "./node/Node";

// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// Test case format:
// For simplicity, each node's value is the same as the node's index (1-indexed).
// For example, the first node with val == 1, the second node with val == 2, and so on.
// The graph is represented in the test case using an adjacency list.
// An adjacency list is a collection of unordered lists used to represent a finite graph.
// Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1.
// You must return the copy of the given node as a reference to the cloned graph.

// Constraints:

// The number of nodes in the graph is in the range [0, 100].
// 1 <= Node.val <= 100
// Node.val is unique for each node.
// There are no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Clone an undirected graph. Each node in the graph contains a value (int) and a
 * list (List[Node]) of its neighbors.
 *
 * @param {Node} node the node to clone the graph from
 * @return {Node} the root of the cloned graph
 * 
 * @example
 * const node = new Node(1, []);
 * node.val; // 1
 * node.neighbors; // []
 * 
 * const clonedNode = cloneGraph(node);
 * clonedNode.val; // 1
 * clonedNode.neighbors; // []
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();
  const queue = [node];
  visited.set(node, new Node(node.val));

  while (queue.length) {
    const curr = queue.shift();

    for (const neighbor of curr.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      visited.get(curr).neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
}
