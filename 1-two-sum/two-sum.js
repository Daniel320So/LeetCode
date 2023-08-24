/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // for (let i=0; i< nums.length; i++) {
    //     let lookupIndex = nums.indexOf(target - nums[i])
    //     if (lookupIndex != -1 && lookupIndex != i) return [i, lookupIndex ]
    // }
    let hashMap = {}
    for (let i=0; i< nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            return [hashMap[nums[i]], i]
        } else {
            hashMap[target-nums[i]] = i
        }
    }
};