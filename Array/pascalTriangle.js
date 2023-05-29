// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//          1
//        1   1
//      1   2   1
//    1   3   3   1
//  1   4   6   4   1 

// Constraints:
// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */

export default function generate(numRows) {

    let res = [];

    if (numRows >= 1) 
        res.push([1]);

    if (numRows >= 2) 
        res.push([1, 1]);

    if (numRows > 2) {    

        let i = 2;

        while (i < numRows) {

            let temp = [];

                temp.push(1);

                for (let j = 0; j < i - 1; j++)
                        temp.push(Number(res[i - 1][j] + res[i - 1][j + 1])); 
                
                temp.push(1);

            res.push(temp)

        i++;
        }
    }
    return res;
};
