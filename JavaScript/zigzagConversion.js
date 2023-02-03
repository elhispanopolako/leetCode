/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) {
        return s
    }
    let arr = []
    let length = s.length
    let cycle = 2 * numRows - 2
    console.log(cycle, length)
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < length; j += cycle) {
            arr.push(s.charAt(j + i))
            if (i != 0 && i != numRows - 1 && j + cycle - i < length) {
                arr.push(s.charAt(j + cycle - i))
            }
        }
    }
    return arr.join('')
};
//tests
const { assert } = require("chai");

describe("Sample test", () => {
    it("Should pass sample tests", () => {
        assert.equal(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
        assert.equal(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
        assert.equal(convert("A", 1), "A");
    })
})
