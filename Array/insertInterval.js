// Insert Interval

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
// represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals
// still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Constraints:
// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

/**
 * Inserts a new interval into a list of non-overlapping intervals.
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 
 * @example
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 * Time complexity: O(n)
 * Space complexity: O(1) (ignoring output space)
 */
export function insert(intervals, newInterval) {
  let result = [],
    i = 0,
    n = intervals.length;

  // Add all intervals that come before the newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged interval
  result.push(newInterval);

  // Add all the remaining intervals
  result.push(...intervals.slice(i));

  return result;
}
