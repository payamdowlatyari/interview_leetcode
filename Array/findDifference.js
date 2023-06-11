// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// -1000 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
export default function findDifference(nums1, nums2) {
  
    let returnArray1 = [];
    let returnArray2 = [];

    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]) && !returnArray1.includes(nums1[i]))
            returnArray1.push(nums1[i]);
    }

    for (let j = 0; j < nums2.length; j++) {
        if (!nums1.includes(nums2[j]) && !returnArray2.includes(nums2[j]))
            returnArray2.push(nums2[j]);
    }

    return [returnArray1, returnArray2];
};