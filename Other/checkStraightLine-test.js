import checkStraightLine from "./checkStraightLine.js";

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

(() => {

    let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];

    console.log('-----1-----')
    console.log('coordinates: ' + coordinates)
    console.log('Output:')
    console.log(checkStraightLine(coordinates));
    console.log('-----------')

    coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];

    console.log('-----2-----')
    console.log('coordinates: ' + coordinates)
    console.log('Output:')
    console.log(checkStraightLine(coordinates));
    console.log('-----------')

    coordinates = [[0,0],[0,1],[0,-1]];

    console.log('-----3-----')
    console.log('coordinates: ' + coordinates)
    console.log('Output:')
    console.log(checkStraightLine(coordinates));
    console.log('-----------')

})();