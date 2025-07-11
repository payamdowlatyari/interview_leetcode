/**
 * A class representing a stack data structure.
 * 
 * @class Stack
 * @example
 * const stack = new Stack();
 * stack.push(1);
 * stack.push(2);
 * stack.pop(); // returns 2
 * stack.peek(); // returns 1
 * stack.isEmpty(); // returns false
 * stack.size(); // returns 1
 */
export class Stack {
  /**
   * Constructor for Stack.
   * @description Initializes an empty stack.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the stack.
   * 
   * @param {*} item - The item to be added to the stack.
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Removes and returns the item at the top of the stack.
   * 
   * @returns {*} The item at the top of the stack.
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Returns the item at the top of the stack without removing it.
   * 
   * @returns {*} The item at the top of the stack.
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * 
   * @returns {boolean} true if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the number of items in the stack.
   * 
   * @returns {number} The number of items in the stack.
   */
  size() {
    return this.items.length;
  }
}
