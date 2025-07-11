/**
 * @class Heap
 * @description A heap is a data structure that is a binary tree where the value of each node is greater than or equal to the values of its children.
 * The heap is a complete binary tree where the last level is filled from left to right. The first level is filled from right to left.
 * The heap is a max-heap by default. The heap is a min-heap if the comparator function is reversed.
 * 
 * @example
 * const heap = new Heap();
 * heap.add(5);
 * heap.add(2);
 * heap.add(8);
 * console.log(heap.peek()); // 8
 * console.log(heap.remove()); // 8
 * console.log(heap.peek()); // 5
 */
export class Heap {
  /**
   * Constructor for the Heap class.
   * @param {function} comparator - An optional parameter. A function to compare two elements.
   * It should return a number. If the number is less than 0, the first element is smaller.
   * If the number is greater than 0, the second element is smaller. If the number is 0, the elements are equal.
   * If the function does not return a number, an error is thrown.
   * The default comparator is (a, b) => a - b.
   */
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    /**
     * The comparator function used by the heap.
     * @function comparator
     * @description A function that takes two elements and compares them.
     * It should return a number. If the number is less than 0, the first element is smaller.
     * If the number is greater than 0, the second element is smaller. If the number is 0, the elements are equal.
     * If the function does not return a number, an error is thrown.
     * @param {*} a - The first element to compare.
     * @param {*} b - The second element to compare.
     * @returns {number} The result of the comparison.
     * @throws {Error} If the comparator function does not return a number.
     */
    this.comparator = (i1, i2) => {
      const value = comparator(this.array[i1], this.array[i2]);
      if (Number.isNaN(value))
        throw new Error(`Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`);
      return value;
    };
  }

  /**
   * Add a value to the heap.
   * @param {*} value - The value to add to the heap.
   * @description This function adds a value to the heap and then calls bubbleUp
   * to restore the heap property.
   */
  add(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  /**
   * Get the top element of the heap without removing it.
   * @description This function returns the top element of the heap. If the heap is empty, it returns null.
   * @returns {*} The top element of the heap or null if the heap is empty.
   */
  peek() {
    return this.array[0];
  }

  /**
   * Remove the element at the given index from the heap.
   * @param {number} [index=0] - The index of the element to remove. Defaults to 0.
   * @description This function removes the element at the given index from the heap,
   * swaps the last element with the element at the given index,
   * then calls bubbleDown to restore the heap property.
   * If the heap is empty, it returns null.
   * @returns {*} The removed element or null if the heap is empty.
   */
  remove(index = 0) {
    if (!this.size) return null;
    this.swap(index, this.size - 1); // swap with last
    const value = this.array.pop(); // remove element
    this.bubbleDown(index);
    return value;
  }

  /**
   * Returns the number of elements in the heap.
   * @returns {number} The number of elements in the heap.
   */
  get size() {
    return this.array.length;
  }

  /**
   * Moves the element at the given index up the heap until the heap property is restored.
   * @description This function is called by add to restore the heap property after adding an element.
   * It compares the element at the given index with its parent and swaps them if the element is smaller.
   * Then it moves to the parent and repeats the process until the element is not smaller than its parent.
   * @private
   */
  bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  /**
   * Moves the element at the given index down the heap until the heap property is restored.
   * @description This function is called by remove to restore the heap property after removing an element.
   * It compares the element at the given index with its children and swaps them if the element is greater.
   * Then it moves to the child and repeats the process until the element is not greater than its children.
   * @private
   */
  bubbleDown(index = 0) {
    let curr = index;
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) =>
      right(i) < this.size && this.comparator(left(i), right(i)) > 0
        ? right(i)
        : left(i);

    while (
      left(curr) < this.size &&
      this.comparator(curr, getTopChild(curr)) > 0
    ) {
      const next = getTopChild(curr);
      this.swap(curr, next);
      curr = next;
    }
  }

  /**
   * Swap two elements in the heap.
   * @param {number} i1 - The index of the first element to swap.
   * @param {number} i2 - The index of the second element to swap.
   * @description This function swaps two elements in the heap. It is used by bubbleUp and bubbleDown
   * to swap the elements in the heap.
   * @private
   */
  swap(i1, i2) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
}

/**
 * Construct a new MaxHeap.
 *
 * @class MaxHeap
 * @extends Heap
 *
 * @example
 * const maxHeap = new MaxHeap();
 *
 * maxHeap.add(1);
 * maxHeap.add(2);
 * maxHeap.add(3);
 * maxHeap.add(4);
 * maxHeap.add(5);
 *
 * console.log(maxHeap.peek()); // 5
 * console.log(maxHeap.remove()); // 5
 * console.log(maxHeap.size); // 4
 */
export class MaxHeap extends Heap {
  /**
   * Construct a new MaxHeap.
   *
   * @example
   * const maxHeap = new MaxHeap();
   *
   * @class MaxHeap
   * @extends Heap
   */
  constructor() {
    super((a, b) => b - a);
  }
}

/**
 * Construct a new MinHeap.
 *
 * @class MinHeap
 * @extends Heap
 *
 * @example
 * const minHeap = new MinHeap();
 *
 * minHeap.add(1);
 * minHeap.add(2);
 * minHeap.add(3);
 * minHeap.add(4);
 * minHeap.add(5);
 *
 * console.log(minHeap.peek()); // 1
 * console.log(minHeap.remove()); // 1
 * console.log(minHeap.size); // 4
 */
export class MinHeap extends Heap {
  /**
   * Construct a new MinHeap.
   *
   * @example
   * const minHeap = new MinHeap();
   *
   * @class MinHeap
   * @extends Heap
   */
  constructor() {
    super((a, b) => a - b);
  }
}

/**
 * MinPriorityQueue class represents a min-priority queue.
 * It is a part of heap data structure.
 * A heap is a specific tree based data structure
 * in which all the nodes of tree are in a specific order.
 * that is the children are arranged in some
 * respect of their parents, can either be greater
 * or less than the parent. This makes it a min priority queue
 * or max priority queue.
 * 
 * @class MinPriorityQueue
 * @description Creates a new instance of MinPriorityQueue.
 *
 * @example
 * const minPriorityQueue = new MinPriorityQueue();
 * minPriorityQueue.insert(1);
 * minPriorityQueue.insert(2);
 * minPriorityQueue.insert(3);
 * minPriorityQueue.insert(4);
 * minPriorityQueue.insert(5);
 * 
 * console.log(minPriorityQueue.peek()); // 1
 * console.log(minPriorityQueue.remove()); // 1
 * console.log(minPriorityQueue.size); // 4
 */
export class MinPriorityQueue {
  constructor (c) {
    this.heap = []
    this.capacity = c
    this.size = 0
  }

  /**
   * Inserts the key at the end and rearranges it
   * so that the binary heap is in appropriate order
   * 
   * @param {*} key - The key to be inserted into the heap
   * @description This function inserts a key at the end of the heap and then
   * calls the bubbleUp function to restore the heap property.
   * If the heap is full, it returns without inserting the key.
   */
  insert (key) {
    if (this.isFull()) return
    this.heap[this.size + 1] = key
    let k = this.size + 1
    while (k > 1) {
      const p = Math.floor(k / 2)
      if (this.heap[k] < this.heap[p]) {
        this.swap(k, p)
        k = p
      } else {
        break
      }
    }
    this.size++
  }

  /**
   * Deletes the highest priority value from the heap.
   * The last element goes to ahead to first position and reorder heap
   * 
   * @description This function deletes the highest priority value from the heap.
   * It replaces the root with the last element and then calls the sink function
   * to restore the heap property.
   * If the heap is empty, it returns without deleting the value.
   */
  delete () {
    if (this.isEmpty()) return
    this.heap[1] = this.heap[this.size]
    this.size--
    this.sink(1)
  }

  /**
   * Sinks the node at the given index down the heap to restore the heap property.
   * 
   * @param {number} k - The index of the node to sink.
   * @description This function sinks the node at the given index down the heap to
   * restore the heap property. It compares the value of the node with its children
   * and swaps them if necessary. The process continues until the node is in the
   * correct position.
   */
  sink (k) {
    while (2 * k <= this.size) {
      let minIndex = 2 * k
      if (2 * k + 1 <= this.size && this.heap[2 * k + 1] < this.heap[2 * k]) {
        minIndex = 2 * k + 1
      }
      if (this.heap[k] > this.heap[minIndex]) {
        this.swap(k, minIndex)
        k = minIndex
      } else {
        break
      }
    }
  }

  /**
   * Swaps the values of two nodes in the heap.
   * 
   * @param {number} i1 - The index of the first node to swap.
   * @param {number} i2 - The index of the second node to swap.
   * @description This function swaps the values of two nodes in the heap.
   */
  swap (i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  /**
   * Checks if the heap is empty.
   * 
   * @returns {boolean} True if the heap is empty, false otherwise.
   */
  isEmpty () {
    return this.size === 0
  }

  /**
   * Checks if the heap is full.
   * 
   * @returns {boolean} True if the heap is full, false otherwise.
   */
  isFull () {
    return this.size === this.capacity
  }

  /**
   * Returns the highest priority value in the heap.
   * 
   * @returns {*} The highest priority value in the heap.
   */
  peek () {
    return this.heap[1]
  }

  /**
   * Prints the heap.
   * 
   * @description This function prints the values of all the nodes in the heap.
   */
  print () {
    for (let i = 1; i <= this.size; i++) {
      console.log(this.heap[i])
    }
  }
}