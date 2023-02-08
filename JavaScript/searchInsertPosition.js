//mine
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let first = nums.indexOf(target)
    if (first != -1) {
        return first
    } else {
        let majorEl = nums.findIndex(el => el > target)
        if (majorEl == -1) {
            return nums.length
        } else {
            return majorEl
        }
    }
};
//other
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }
    return nums.length;
};