import addBinary from "./addBinary.js";

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Example 3:

// Input: 
// a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// Output: "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

const addBinaryTest = () => {

    let a = "11"; 
    let b = "1";
    console.log('------1------');
    console.log('addBinary');
    console.log(addBinary(a, b));
    console.log('-------------');

    console.log();

    a = "1010"; 
    b = "1011";

    console.log('------2------');
    console.log('addBinary');
    console.log(addBinary(a, b));
    console.log('-------------');

    console.log();

    a = "000010100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
    b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
    console.log('------2------');
    console.log('addBinary');
    console.log(addBinary(a, b));
    console.log('-------------');

    console.log();
};

addBinaryTest();