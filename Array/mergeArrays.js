// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -10^9 <= nums1[i], nums2[j] <= 10^9

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export default function merge(nums1, m, nums2, n) {
  
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < n) {
       
        console.log(nums2[i] + ' -i- ' + (i));
        while (j < m + n) {
            console.log(nums1[j] + ' --j-- ' + (j));

            if (j >= m && nums1[j] == 0) {
                nums1[j] = nums2[i];
                console.log(nums1 + ' 1 == 0')
                break;
            }
            
            if ((nums2[i] < nums1[j])) {
                k = j;
                while (k < m + n) {
                    console.log(nums1[k] + ' ---k--- ' + (k));
               
                    if (nums1[k] == 0) 
                        break;
                    else 
                    k++;
                }

                while (k > j) {
                    nums1[k] = nums1[k - 1];
                    k--;
                }

                nums1[j] = nums2[i];
                console.log(nums1 + ' 2 === ?' + i)
                break;
            }
            j++;
        }
        i++;
    }

    console.log(nums1);
};
