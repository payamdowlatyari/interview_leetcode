import generate from "./pascalTriangle.js";

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]


const generateTest = () => {

    let numRows = 5;

    console.log('-----1-----');
    console.log('Number rows: ' + numRows);
    console.log('Output');
    console.log(generate(numRows));
    console.log('-----------');

    console.log();

    numRows = 1;

    console.log('-----2-----');
    console.log('Number rows: ' + numRows);
    console.log('Output');
    console.log(generate(numRows));
    console.log('-----------');
};

generateTest();