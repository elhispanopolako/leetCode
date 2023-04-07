/**
 * @param {number[]} digits
 * @return {number[]}
 */
//mine first but wrong cause a big numbers
let plusOne = function (digits) {
    return (Number(digits.join('')) + 1).toString().split('')
};
//final function cause a big numbers
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
    if (digits.length <= 16) return (Number(digits.join('')) + 1).toString().split('')
    digits[digits.length - 1] = digits[digits.length - 1] + 1
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] == 10) {
            digits[i] = 0
            digits[i - 1] = digits[i - 1] + 1
        }
    }
    if (digits[0] == 10) {
        digits[0] = 0
        digits.unshift(1)
    }
    return digits
};
//final 2 when I find a bigInt() function
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};