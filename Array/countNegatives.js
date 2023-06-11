// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
// return the number of negative numbers in grid.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
 
// Follow up: Could you find an O(n + m) solution?

/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function countNegatives(grid) {
    
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) count++;
        }
    }

    console.log(Math.pow(2, 31))
    return count;
};