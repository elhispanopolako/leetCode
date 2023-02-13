//option with filter and concat
let arr = nums1.filter(x => x !== 0).concat(nums2).sort()
//mine option without filter and concat
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let j = 0
    for (let i = m; i < nums1.length; i++) {
        if (nums1[i] == 0) {
            nums1.splice(i, 1, nums2[j])
            j++
        }
    }
    nums1.sort((a, b) => a - b)
};