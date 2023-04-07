/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function (num) {
    const sym = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'
    }
    let nums = num.toString().split('');
    let len = nums.length;
    let answer = nums.map((n, i) => {
        return n + (Array(len - i - 1).fill(0)).join('');
    });
    let x = answer.map(Number).filter(function (n) { return n !== 0; });
    let res = []
    for (let i = 0; i < x.length; i++) {
        res.push(sym[x[i]])
    }
    return res.join('')
}
//Other
function intToRoman(num) {
    const rNums = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';
    for (let rN in rNums) {
        let count = num / rNums[rN];
        if (count > 0) {
            result += rN.repeat(count);
            num = num % rNums[rN];
        }
    }
    return result;
};