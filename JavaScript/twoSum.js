/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let filter = []
    nums.forEach((num, idx) => {
        for (let i = 1; i < nums.length; i++) {
            if (num + nums[idx + i] == target) {
                filter.push(idx, idx + i)
            }
        }

    })
    return filter
};