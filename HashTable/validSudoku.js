// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * Checks if a Sudoku board is valid. 
 *
 * @param {character[][]} board - The Sudoku board to be checked.
 * @return {boolean} - Returns true if the board is valid, false otherwise.
 * 
 * @example
 * isValidSudoku([
 *   ["5","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]);
 * // Output: true
 * 
 * @example
 * isValidSudoku([
 *   ["8","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]);
 * // Output: false
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
export const isValidSudoku = (board) => {
  let rows = new Array(9).fill(0);
  let cols = new Array(9).fill(0);
  let boxes = new Array(9).fill(0);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== ".") {
        let boxIndex = (i / 3) * 3 + j / 3;
        if (
          rows[i] & (1 << num) ||
          cols[j] & (1 << num) ||
          boxes[boxIndex] & (1 << num)
        ) {
          return false;
        }
        rows[i] |= 1 << num;
        cols[j] |= 1 << num;
        boxes[boxIndex] |= 1 << num;
      }
    }
  }
  return true;
};
