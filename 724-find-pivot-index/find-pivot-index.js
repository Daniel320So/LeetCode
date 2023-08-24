/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let leftSum = 0;
    let rightSum = nums.slice(1).reduce((partialSum, a) => partialSum + a, 0);
    for (let i=0; i<nums.length-1; i++) {
        if (leftSum == rightSum) return i
        leftSum = leftSum + nums[i]
        rightSum = rightSum - nums[i+1]
    }
    if (leftSum == 0) return nums.length-1
    return -1
};