// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

// Constraints:
// -100.0 < x < 100.0
// -2^31 <= n <= 2^31 - 1
// n is an integer.
// Either x is not zero or n > 0.
// -10^4 <= xn <= 10^4

var myPow = function(x, n) {

    if (x === 1) return x;

    if (x === -1) {
    
        if (n % 2 === 0) return (-1 * x) 
          return x;
    }
    
    if (n >= 2147483647 || n <= -2147483648) return 0;
    
    if (n > 0) {
        if (n === 1) 
            return x;
        
        return x * myPow(x, n-1);
        } 
        else {
        if (n === -1) 
            return 1 / x;
        
        return (1 / x) * myPow(x, n + 1)
    }
};

export default myPow;