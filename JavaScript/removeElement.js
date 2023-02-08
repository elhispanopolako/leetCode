//mine
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1)
            i--
        }

    }
};
//other
var removeElement = function (nums, val) {
    let i = 0
    let n = nums.length
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}