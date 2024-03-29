/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
    let res = x
    for (let i = 1; i <= x + 1; i++) {
        if (i * i > x) return i - 1;
    }
    return res;
};