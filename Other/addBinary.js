// Given two binary strings a and b, return their sum as a binary string.

// Constraints:

// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.


const addOneDigit = (a, b, s) => {

    let sum = 0;
    let r = 0;

    if (a.length >= 1 && b.length >= 1) 
        sum = Number(a[a.length - 1]) + Number(b[b.length - 1]) + Number(s);
     
    if (sum == 2) {
        r = 1;
        sum = 0;
    }

    if (sum == 3) {
        r = 1;
        sum = 1;
    }

    if (a.length == 1 && b.length == 1) {
        if (r == 1) 
            sum =  String(r) + String(sum);
          
        return String(sum);    
    }
    return String(addOneDigit(a.slice(0, a.length - 1), b.slice(0, b.length - 1), r)) + String(sum);    
}



/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export default function addBinary(a,  b) {

    if (a.length > b.length) {
        let n = a.length - b.length;

        while (n > 0) {
            b = '0' + b;
            n--;
        }
    } 

    if (a.length < b.length) {
        let m = b.length - a.length;

        while (m > 0) {
            a = '0' + a;
            m--;
        }
    }

    return addOneDigit(a, b, 0);
};