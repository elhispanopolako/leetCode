/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let res = []
    let sort = nums.sort((a, b) => a - b)
    let major = 0
    let nextNum = sort[0]
    while (nextNum !== undefined) {
        let z = nums.filter(x => x == nextNum)
        if (z.length > major) {
            res.push(nextNum)
            major = z.length
        }
        nextNum = sort[sort.findIndex(el => el > nextNum)]
    }
    return res[res.length - 1]

};

//First Try
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let res = []
    let major = 0
    sort.forEach(num => {
        let z = nums.filter(x => x == num)
        if (z.length > major) {
            res.push(num)
            major = z.length
        }
    })
    return res[res.length - 1]

};
//Other approachs

var majorityElement = function (nums) {
    let sort = nums.sort((a, b) => a - b)
    return sort[Math.floor(sort.length / 2)]
};
//
var majorityElement = function (nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }

    return candidate;
};