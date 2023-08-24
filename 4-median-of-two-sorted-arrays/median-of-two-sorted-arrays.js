/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort((a, b) => a - b)
    isOdd = nums1.length%2? 1:0
   

    if (isOdd) {
        return nums1[(nums1.length+1)/2-1]
    } else {
        return (nums1[(nums1.length)/2-1] + nums1[(nums1.length)/2])/2
    }
};