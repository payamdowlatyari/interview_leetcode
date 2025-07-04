
/**
 * Generate all permutations of the given items.
 * This function uses recursion to generate all possible arrangements of the items.
 * The base case is when the array is empty, in which case it returns the accumulated permutations.
 * 
 * @param {Array} items
 * @return {Array}
 * 
 * Time Complexity: O(n!)
 * Space Complexity: O(n!)
 */
export function allPermutations (items) {   

      let results = [];
    
    /**
     * Recursively generates all permutations of the given array.
     * 
     * @param {Array} arr The array to generate permutations for
     * @param {Array} memo The accumulated permutations
     * @return {Array} The array of all permutations
     */
      function permute (arr, memo) {
    
        var cur, memo = memo || [];
    
        for (let i = 0; i < arr.length; i++) {
    
            cur = arr.splice(i, 1);
    
            if (arr.length === 0) 
              results.push(memo.concat(cur));
          
          permute(arr.slice(), memo.concat(cur));
          arr.splice(i, 0, cur[0]);
        }

        return results;
      }

      permute(items);
      
    return results;
};