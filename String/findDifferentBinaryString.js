// Given an array of strings nums containing n unique binary strings each of length n, 
// return a binary string of length n that does not appear in nums. 
// If there are multiple answers, you may return any of them.

// Constraints:

// n == nums.length
// 1 <= n <= 16
// nums[i].length == n
// nums[i] is either '0' or '1'.
// All the strings of nums are unique.


/**
 * Finds a binary string of length n that is not present in the given array of binary strings.
 *
 * @param {string[]} nums
 * @return {string}
 * 
 * @example
 * Input: nums = ["01","10","11","00"]
 * Output: "11"
 * 
 * Input: nums = ["00","01","10","11"]
 * Output: "11"
 * 
 * Input: nums = ["00","01","11","10"]
 * Output: "10"
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function findDifferentBinaryString (nums) {
    let n = nums.length;
    let ans = "";
    for (let i = 0; i < n; i++) {
        ans += nums[i][i] === "0" ? "1" : "0";
    }
    return ans;
};