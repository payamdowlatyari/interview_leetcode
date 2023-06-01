import topKFrequent from "./topKFrequent.js";

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequentTest = () => {

    const nums1 = [1,1,1,2,2,3]; 
    const k1 = 2;

    console.log('------1-----')
    console.log('nums: ' + nums1 + ' k: ' + k1);
    console.log('topKFrequent');
    console.log(topKFrequent(nums1, k1));
    console.log('------------')

    console.log();

    const nums2 = [1]; 
    const k2 = 1;

    console.log('------2-----')
    console.log('nums: ' + nums2 + ' k: ' + k2);
    console.log('topKFrequent');
    console.log(topKFrequent(nums2, k2));
    console.log('------------')
};

topKFrequentTest();