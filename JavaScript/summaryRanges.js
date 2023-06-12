/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let res = []
    let range = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1] - 1) {
            range.push(nums[i])
            range.push(nums[i + 1])
        } else {
            if (range.length > 0) {
                let min = Math.min(...range)
                let max = Math.max(...range)
                let r = `${min}->${max}`
                res.push(r)
                range = []
            }
            if (nums[i] !== nums[i - 1] + 1) {
                res.push(`${nums[i]}`)
            }
        }
    }
    return res
};