// You are given an array coordinates, coordinates[i] = [x, y], 
// where [x, y] represents the coordinate of a point. 
// Check if these points make a straight line in the XY plane.

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

export default function checkStraightLine(coordinates){

    if (coordinates.length == 2) return true; 

    let i = 1;

    if (coordinates[i][1] == 0 && coordinates[0][1] == 0) {

        while (i < coordinates.length) {
            if (coordinates[i][1] != 0) return false;
            i++;
        }
    }
    else if (coordinates[i][0] == 0 && coordinates[0][0] == 0) {

        while (i < coordinates.length) {
            if (coordinates[i][0] != 0) return false;
            i++;
        }
    } 
    else {
        
        let slope = (coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]) ;

        while (i < coordinates.length) {
            if ((coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]) != slope) return false;
            i++;
        }
    } 
    return true;
};