/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    return x == String(x).split('').reverse().map(x => Number(x)).join('')
};