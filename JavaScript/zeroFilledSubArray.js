/**
 * @param {number[]} nums
 * @return {number}
 */
let zeroFilledSubarray = function (nums) {
    let oneZero = nums.filter(x => x == 0)
    if (oneZero.length == 0) {
        return 0
    }
    let twoZeros = 0
    let threeZeros = 0
    let fourZeros = 0
    nums.map((x, idx) => {
        if ((x == 0 && nums[idx + 1] == 0)) {
            twoZeros++
        }
        if ((x == 0 && nums[idx + 1] == 0 && nums[idx + 2] == 0)) {
            threeZeros++
        }
        if ((x == 0 && nums[idx + 1] == 0 && nums[idx + 2] == 0 && nums[idx + 3] == 0)) {
            fourZeros++
        }
    })
    return oneZero.length + twoZeros + threeZeros + fourZeros
};
//Simple solution
let zeroFilledSubarray = function (nums) {
    let counter = 0
    let res = nums.reduce((p, num) =>
        p + (counter = num === 0 ? counter + 1 : 0), 0
    )
    return res
};