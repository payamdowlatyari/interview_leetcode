// Given n non-negative integers representing an elevation map where the width 
// of each bar is 1, compute how much water it can trap after raining.
 
// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * Compute the volume of water that can be trapped in the given elevation map.
 * 
 * @param {number[]} height
 * @return {number}
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export function trap(height) {

  let left = 0, right = height.length - 1, volume = 0;

  let maxLeft = 0, maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
        if (height[left] >= maxLeft) {
            maxLeft = height[left]
        } else volume += maxLeft - height[left]
        left++
    } else {
        if (height[right] >= maxRight) {
            maxRight = height[right]
        } else volume += maxRight - height[right]
        right--
    }  
  }

  return volume;
};