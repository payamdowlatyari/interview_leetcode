import countNegatives from "./countNegatives.js";

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

(() => {

    const grid1 = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

    console.log('----1----')
    console.log('grid: ' + grid1);
    console.log('negatives:');
    console.log(countNegatives(grid1));
    console.log('---------')
    console.log();

    const grid2 = [[3,2],[1,0]];

    console.log('----2----')
    console.log('grid: ' + grid2);
    console.log('negatives:');
    console.log(countNegatives(grid2));
    console.log('---------')
    console.log();

})();