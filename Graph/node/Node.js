
/**
 * @param {number} val
 * @param {Node[]} neighbors
 */
 export class Node {
    /**
     * Constructs a new Node.
     */
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};