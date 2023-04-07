//first
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
let findKthPositive = function (arr, k) {
    let res = []
    for (let i = 1; i < 3000; i++) {
        res.push(i)
    }
    let filter = res.filter(x => arr.find(n => n == x) == undefined)
    return filter[k - 1]
};
//optimized
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
let findKthPositive = function (arr, k) {
    let missingCount = 0
    let prev = 0

    for (let i = 0; i < arr.length; i++) {
        missingCount += arr[i] - prev - 1
        if (missingCount >= k) {
            return arr[i] - (missingCount - k) - 1
        }
        prev = arr[i]
    }

    return arr[arr.length - 1] + (k - missingCount)
};
