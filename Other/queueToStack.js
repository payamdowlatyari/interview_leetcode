// Implement Stack using Queues

// Implement a last-in-first-out (LIFO) stack using only two queues. 
// The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, 
// peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. 
// You may simulate a queue using a list or deque (double-ended queue) 
// as long as you use only a queue's standard operations.

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
 
// Constraints:
// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and top are valid.
 
// Follow-up: Can you implement the stack using only one queue?

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


/**
 * Initialize your data structure here.
 * 
 * MyStack is a data structure which implements a stack using two queues.
 * The implemented stack should support all the functions of a normal stack (push, peek, pop, and empty).
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
    this.topElement = null; // To keep track of the top element
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // Push the new element onto queue1
    this.queue1.push(x);
    this.topElement = x; // Update the top element to the newly pushed value
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.empty()) return null;

    // Move all elements except the last one from queue1 to queue2
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }

    // The last element in queue1 is the top element
    const popped = this.queue1.shift();

    // Swap the names of queue1 and queue2
    [this.queue1, this.queue2] = [this.queue2, this.queue1];

    // Update the top element
    this.topElement = this.queue1.length > 0 ? this.queue1[this.queue1.length - 1] : null;

    return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0 && this.queue2.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Impelement a Queue using two Stacks
// Implement a first-in-first-out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

/**
 * Initialize your data structure here.
 * 
 * MyQueue is a data structure which implements a queue using two stacks.
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek(); // Ensure stack2 has the current front element
    return this.stack2.pop();
};

/**
 * @return {number}
 * 
 * The peek() method returns the current front element of the queue without removing it from the queue.
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};


export { MyStack, MyQueue }