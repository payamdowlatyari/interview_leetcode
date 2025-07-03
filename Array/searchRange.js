// Find First and Last Position of Element in Sorted numsay

// Given an numsay of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.

// If target is not found in the numsay, return [-1, -1].

// You must write an algorithm with O(log n) runtime completargetity.
 
// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing numsay.
// -109 <= target <= 109

/**
 * Find the starting and ending position of a given target value in a sorted array.
 * This function uses binary search to achieve O(log n) time complexity.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */
export function searchRange(nums, target) {

    let result = [-1, -1]

    let low = 0, high = nums.length - 1

    while (high >= low) {

    const mid = Math.floor(low + (high - low) / 2)
    
        if (nums[mid] === target) {

          let left = mid, right = mid
        
          result[0] = left

          while (left > 0 && nums[left - 1] === target) {
            left--
            result[0]--
          }

            result[1] = right

          while (right < nums.length - 1 && nums[right + 1] === target)  {
            right++
            result[1]++
          }
        }
    
        if (target < nums[mid]) {
          high = mid - 1
        } else {
          low = mid + 1
        }
      }
      return result
};