import isPalindrome from "./isPalindrome.js";

// Example 1:
// -------------------
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// -------------------
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// -------------------
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindromeTest = () => {

    const s1 = "A man, a plan, a canal: Panama";

    console.log('------1------');
    console.log('s');
    console.log(s1);
    console.log('isPalindrome');
    console.log(isPalindrome(s1));
    console.log('-------------');

    console.log();

    const s2 = "race a car";

    console.log('------2------');
    console.log('s');
    console.log(s2);
    console.log('isPalindrome');
    console.log(isPalindrome(s2));
    console.log('-------------');

    console.log();

    const s3 = " ";

    console.log('------3------');
    console.log('s');
    console.log(s3);
    console.log('isPalindrome');
    console.log(isPalindrome(s3));
    console.log('-------------');
    
};

isPalindromeTest();