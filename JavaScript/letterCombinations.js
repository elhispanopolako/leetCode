/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
    const leters = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    if (digits == '') { return [] }
    if (digits.length == 1) { return leters[digits] }
    let digArr = digits.split('')
    let r = []
    for (let i = 0; i < digArr.length; i++) {
        r.push(leters[digArr[i]])
    }

    let res = []
    for (let i = 0; i < r.length - 1; i++) {
        for (let j = 0; j < r[i].length; j++) {
            for (let k = 0; k < r[i + 1].length; k++) {
                res.push(`${r[i][j]}${r[i + 1][k]}`)
            }
        }
    }
    return res
};
//optimized
let letterCombinations = function (digits) {
    const letters = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ]);

    const generateCombinations = (digits, index, current, res) => {
        if (index === digits.length) {
            res.push(current);
            return;
        }

        const lettersForDigit = letters.get(digits[index]);

        for (let i = 0; i < lettersForDigit.length; i++) {
            generateCombinations(digits, index + 1, current + lettersForDigit[i], res);
        }
    };

    if (digits === '') {
        return [];
    }

    const res = [];
    generateCombinations(digits, 0, '', res);
    return res;
};