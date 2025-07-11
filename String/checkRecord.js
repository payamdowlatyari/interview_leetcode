// Student Attendance Record I

// You are given a string s representing an attendance record for a student where each character
// signifies whether the student was absent, late, or present on that day.
// The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.

// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Constraints:
// 1 <= s.length <= 1000
// s[i] is either 'A', 'L', or 'P'.

/**
 * Checks if a student is eligible for an attendance award.
 *
 * @param {string} s
 * @return {boolean}
 *
 * @example
 * Input: s = "PPALLP"
 * Output: true
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function checkRecord(s) {
  let count_A = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      if (count_A >= 1) return false;
      count_A++;
    }
    if (s[i] === "L") {
      if (i + 2 < s.length) {
        if (s[i + 1] === "L" && s[i + 2] === "L") return false;
      }
    }
  }
  return true;
}
