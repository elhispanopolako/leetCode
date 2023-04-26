/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num.toString().split('').length > 1) {
        num = num.toString().split('').map(Number).reduce((a, b) => a + b)
    }
    return num
};