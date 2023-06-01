import isSubsequence from "./isSubsequence.js";

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

const isSubsequenceTest = () => {

   const s1 = "abc"; 
   const t1 = "ahbgdc"

   console.log('------1-----')
   console.log('s1: ' + s1 + ' t1: ' + t1);
   console.log('isSubsequence');
   console.log(isSubsequence(s1, t1));
   console.log('------------')

   console.log();

   const s2 = "axc"; 
   const t2 = "ahbgdc";

   console.log('------2-----')
   console.log('s1: ' + s2 + ' t1: ' + t2);
   console.log('isSubsequence');
   console.log(isSubsequence(s2, t2));
   console.log('------------')
};

isSubsequenceTest();