// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet.
// If key does not exist in the HashSet, do nothing.

// Constraints:

// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.

/**
 * Initialize your data structure here.
 *
 * @param {number} size
 * @return {HashTable}
 *
 * @example
 * const hashTable = new HashTable(size);
 * hashTable.add(key, value);
 * hashTable.remove(key);
 * const value = hashTable.search(key);
 *
 * Time complexity: O(1) for add, remove, and search operations.
 * Space complexity: O(n) where n is the size of the hash table.
 */
export class HashTable {
  /**
   * Initializes a new instance of the HashTable class.
   *
   * @param {number} size The size of the hash table.
   *
   * Initializes an empty hash table with the given size, setting up the
   * values storage object and initializing the number of values to zero.
   */
  constructor(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  /**
   * Adds a key-value pair to the hash table.
   *
   * If the key does not exist, it is added and the value of numberOfValues is incremented.
   * If the key does exist, the value is updated.
   *
   * @param {number|string} key The key of the value to add.
   * @param {*} value The value to add.
   */
  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++;
    }
    this.values[hash][key] = value;
  }

  /**
   * Removes a key-value pair from the hash table.
   *
   * If the key exists, it is removed and the value of numberOfValues is decremented.
   * If the key does not exist, nothing happens.
   *
   * @param {number|string} key The key of the value to remove.
   */
  remove(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }

  /**
   * Checks if a key exists in the hash table.
   *
   * @param {number|string} key The key to check.
   * @return {boolean} True if the key exists in the hash table, false otherwise.
   */
  contains(key) {
    const hash = this.calculateHash(key);
    return (
      this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)
    );
  }

  /**
   * Calculates the hash value for a given key.
   *
   * The hash value is simply the length of the key converted to a string
   * modulo the size of the hash table.
   *
   * @param {number|string} key The key to calculate a hash for.
   * @return {number} The calculated hash value.
   */
  calculateHash(key) {
    return key.toString().length % this.size;
  }

  /**
   * Searches for a key-value pair in the hash table.
   *
   * Returns the value associated with the key if the key exists in the hash table,
   * or null if the key does not exist.
   *
   * @param {number|string} key The key to search for.
   * @return {*} The value associated with the key if it exists, or null if it does not.
   */
  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }

  /**
   * Returns the number of key-value pairs in the hash table.
   *
   * @return {number} The number of key-value pairs in the hash table.
   */
  length() {
    return this.numberOfValues;
  }

  /**
   * Prints the values stored in the hash table.
   *
   * Prints the values in the hash table in the order that they are stored
   * in the underlying object. This order is not guaranteed to be the same
   * across different platforms or versions of JavaScript.
   */
  print() {
    let string = "";
    for (const value in this.values) {
      for (const key in this.values[value]) {
        string += `${this.values[value][key]} `;
      }
    }
    console.log(string.trim());
  }
}
