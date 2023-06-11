import isAnagram from "./anagram.js";

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

(() => {

    let s = "anagram"; 
    let t = "nagaram";

    console.log('------1------');
    console.log('isAnagram');
    console.log('s: ' + s + ' t: ' + t);
    console.log(isAnagram(s, t));
    console.log('-------------');

    console.log();

    s = "rat"; 
    t = "car";

    console.log('------2------');
    console.log('isAnagram');
    console.log('s: ' + s + ' t: ' + t);
    console.log(isAnagram(s, t));
    console.log('-------------');

    console.log();

    s = "aacc"; 
    t = "ccac";

    console.log('------3------');
    console.log('isAnagram');
    console.log('s: ' + s + ' t: ' + t);
    console.log(isAnagram(s, t));
    console.log('-------------');

    console.log();

})();