/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`)
    return BigInt(sum).toString(2)
};