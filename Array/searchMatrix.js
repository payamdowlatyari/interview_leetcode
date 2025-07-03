// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10^4 <= matrix[i][j], target <= 10^4

/**
 * Searches for a target value in a 2D matrix.
 * The matrix is sorted such that each row is in non-decreasing order,
 * and the first integer of each row is greater than the last integer of the previous row.
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * Time complexity: O(log(m * n))
 * Space complexity: O(1)
 */
export function searchMatrix(matrix, target) {
  
    let i = 0;   
    let found = false;
    while (i < matrix.length) {  
        let j = 0;
            if (target == matrix[i][j]) {
                found = true;
                break;
            } 
            if (target > matrix[i][j] && (i + 1 == matrix.length || target < matrix[i + 1][j])) {
                while (j < matrix[i].length) {
                    if (target == matrix[i][j]) {
                        found = true;
                        break;
                    }
                    j++;
                }
            }
        i++;
    }
    return found;
};