// Minimum Index Sum of Two Lists

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i]
// and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

// Constraints:
// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the strings of list1 are unique.
// All the strings of list2 are unique.
// There is at least a common string between list1 and list2.

/**
 * Finds the common strings with the least index sum.
 *
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 
 * @example
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
 *        list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only common string is "Shogun".
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export function findRestaurant(list1, list2) {
  let mapCommonStr = new Map();

  let index = 0;

  while (index < list1.length) {
    if (list2.includes(list1[index])) {
      let sumIndex = index + list2.indexOf(list1[index]);

      if (!mapCommonStr.has(sumIndex)) {
        mapCommonStr.set(sumIndex, [list1[index]]);
      } else {
        mapCommonStr.get(sumIndex).push(list1[index]);
      }
    }
    index++;
  }

  let minSumIndex = 0;

  while (minSumIndex < list1.length + list2.length - 1) {
    if (mapCommonStr.get(minSumIndex)) break;
    minSumIndex++;
  }
  return mapCommonStr.get(minSumIndex);
}
