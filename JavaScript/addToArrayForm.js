/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
let addToArrayForm = function (num, k) {
    return (BigInt(num.join('')) + BigInt(k)).toString().split('').map(Number)
};