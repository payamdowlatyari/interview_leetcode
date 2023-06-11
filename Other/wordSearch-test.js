import exist from "./wordSearch.js";

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false


(() => {

    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]; 
    let word = "ABCCED";

    console.log('------1------');
    console.log('board: ' + board);
    console.log('word: ' + word);
    console.log('expected: true');
    console.log(exist(board, word));
    console.log('-------------');

    console.log();

    board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
    word = "SEE";

    console.log('------2------');
    console.log('board: ' + board);
    console.log('word: ' + word);
    console.log('expected: true');
    console.log(exist(board, word));
    console.log('-------------');

    console.log();

    // board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]; 
    // word = "ABCB";

    board = [["C","A","A"],["A","A","A"],["B","C","D"]];
    word = "AAB";
    console.log('------3------');
    console.log('board: ' + board);
    console.log('word: ' + word);
    console.log('expected: false');
    console.log(exist(board, word));
    console.log('-------------');

    console.log();
   
})();