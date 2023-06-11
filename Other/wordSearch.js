// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, 
// where adjacent cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 
// Follow up: Could you use search pruning to make your solution faster with a larger board?

const initialiseAux = (r, c) => {

    let aux = [];

    for (let i = 0; i < r; i++) {
        aux[i] = [];
        for (let j = 0; j < c; j++) {
            aux[i][j] = 0;
        }
    }
    return aux;
}

const nextLetter = (board, x, y, auxArray, word, n) => {

    console.log('n ----- ' + n)

    if (!word[n]) return true;

    auxArray[x][y] = 1;

    let exists = false;

    console.log('board[x][y]: ' + board[x][y] + ' word[n]: ' + word[n]);
    console.log(auxArray);
    if (x < board.length - 1) {
        console.log('board[x + 1][y]: ' + board[x + 1][y] + ' word[n]: ' + word[n]);
        console.log('x: ' + (x + 1) + ' --- y: ' + y)

        if (board[x + 1][y] == word[n] && auxArray[x + 1][y] == 0) {
            auxArray[x + 1][y] = 1;
            exists = nextLetter(board, x + 1, y, auxArray, word, n + 1);

            console.log(exists);
            if (!exists) 
            auxArray[x + 1][y] = 0;
        } 
    }
    if (x > 0) {
        console.log('board[x - 1][y]: ' + board[x - 1][y] + ' word[n]: ' + word[n]);
        console.log('x: ' + (x - 1) + ' --- y: ' + y)
        if (board[x - 1][y] == word[n] && auxArray[x - 1][y] == 0) {
            auxArray[x - 1][y] = 1;
            exists = nextLetter(board, x - 1, y, auxArray, word, n + 1);
            console.log(exists);
            if (!exists) 
            auxArray[x - 1][y] = 0;
        } 
    }
    if (y < board[x].length - 1) {
        console.log('board[x][y + 1]: ' + board[x][y + 1] + ' word[n]: ' + word[n]);
        console.log('x: ' + x + ' --- y: ' + (y + 1))
        if (board[x][y + 1] == word[n] && auxArray[x][y + 1] == 0) {
            auxArray[x][y + 1] = 1;
            exists = nextLetter(board, x, y + 1, auxArray, word, n + 1);
            console.log(exists);
            if (!exists) 
            auxArray[x][y + 1] = 0;
        } 
    }
    if (y > 0) {
        console.log('board[x][y - 1]: ' + board[x][y - 1] + ' word[n]: ' + word[n]);
        console.log('x: ' + x + ' --- y: ' + (y - 1))
        if (board[x][y - 1] == word[n] && auxArray[x][y - 1] == 0) {
            auxArray[x][y - 1] = 1;
            exists = nextLetter(board, x, y - 1, auxArray, word, n + 1);
            console.log(exists);
            if (!exists) 
            auxArray[x][y - 1] = 0;
        } 
    }

    console.log(' end: ' + exists);
    return exists;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export default function exist(board, word) {

    let auxArray = initialiseAux(board.length, board[0].length);
    console.log(auxArray);

    let i = 0; 
    let j = 0;

    while (i < board.length){
        while (j < board[i].length) {
            if (word[0] == board[i][j]) {
                
                if (nextLetter(board, i, j, auxArray, word, 1)) 
                    return true;
                
                else 
                    auxArray = initialiseAux(board.length, board[0].length);
            } 
            j++;
        }
        i++;
    }

    return false;
};