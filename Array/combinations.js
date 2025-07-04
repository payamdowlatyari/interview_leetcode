/**
 * Generate all combinations of the given items.
 * 
 * This function takes an array of items and returns an array of all possible combinations of the items.
 * 
 * @example
 * const items = [1, 2, 3];
 * const combinations = allCombinations(items);
 * console.log(combinations); // Output: [[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 2, 2], [1, 2, 3], [1, 3, 3], [2, 2, 2], [2, 2, 3], [2, 3, 3], [3, 3, 3]]
 * 
 * @param {Array} items
 * @return {Array}
 *
 * Time complexity: O(n * 2^n)
 * Space complexity: O(n)
 */
export function allCombinations(items) {

   const results = [];

  /**
   * Recursively generates all combinations of the given items starting from a specific index.
   * 
   * @param {number} start - The starting index to generate combinations from.
   * @param {Array} combination - The current combination being built.
   */
   function backtrack(start, combination) {
       if (combination.length === items.length) {
           results.push([...combination]);
           return;
       }

       for (let i = start; i < items.length; i++) {
           combination.push(items[i]);
           backtrack(i, combination);
           combination.pop();
       }
   }

   backtrack(0, []);
   return results;
   
};