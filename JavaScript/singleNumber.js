/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.sort((a, b) => a - b).filter((n, i) => { return n !== nums[i + 1] && n !== nums[i - 1] })[0]
};