//mine
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
    let idx = 1
    let result = []
    for (let num of nums) {
        if (num !== nums[idx]) {
            result.push(num)
        }
        idx++
    }
    return result
};
//other
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
};
//other2
let removeDuplicates = function (nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set.values())
    return set.size;
};