/**
 * @param {string} s
 * @return {number}
 */
//mine
var romanToInt = function (s) {
    let result = 0
    let arr = s.split('')
    let numberM = arr.filter((n, idx) => n == 'M' && arr[idx - 1] !== 'C')
    let numberCM = arr.filter((n, idx) => n == 'C' && arr[idx + 1] == 'M' || n == 'M' && arr[idx - 1] == 'C')
    let numberD = arr.filter((n, idx) => n == 'D' && arr[idx - 1] !== 'C')
    let numberCD = arr.filter((n, idx) => (n == 'C' && arr[idx + 1] == 'D') || (n == 'D' && arr[idx - 1] == 'C'))
    let numberC = arr.filter((n, idx) => n == 'C' && (arr[idx - 1] !== 'X' && arr[idx + 1] !== 'M' && arr[idx + 1] !== 'D'))
    let numberXC = arr.filter((n, idx) => n == 'X' && arr[idx + 1] == 'C' || n == 'C' && arr[idx - 1] == 'X')
    let numberL = arr.filter((n, idx) => n == 'L' && arr[idx - 1] !== 'X')
    let numberXL = arr.filter((n, idx) => n == 'X' && arr[idx + 1] == 'L' || n == 'L' && arr[idx - 1] == 'X')
    let numberX = arr.filter((n, idx) => n == 'X' && (arr[idx + 1] !== 'L' && arr[idx + 1] !== 'C' && arr[idx - 1] !== 'I'))
    let numberIX = arr.filter((n, idx) => n == 'I' && arr[idx + 1] == 'X' || n == 'X' && arr[idx - 1] == 'I')
    let numberV = arr.filter((n, idx) => n == 'V' && arr[idx - 1] !== 'I')
    let numberIV = arr.filter((n, idx) => n == 'I' && arr[idx + 1] == 'V' || n == 'V' && arr[idx - 1] == 'I')
    let numberI = arr.filter((n, idx) => n == 'I' && (arr[idx + 1] !== 'V' && arr[idx + 1] !== 'X'))
    if (numberM.length > 0) {
        result += numberM.length * 1000
    }
    if (numberCM.length > 0) {
        result += 900
    }
    if (numberD.length > 0) {
        result += 500
    }
    if (numberCD.length > 0) {
        result += 400
    }
    if (numberC.length > 0) {
        result += numberC.length * 100
    }
    if (numberXC.length > 0) {
        result += 90
    }
    if (numberL.length > 0) {
        result += 50
    }
    if (numberXL.length > 0) {
        result += 40
    }
    if (numberX.length > 0) {
        result += numberX.length * 10
    }
    if (numberIX.length > 0) {
        result += 9
    }
    if (numberV.length > 0) {
        result += 5
    }
    if (numberIV.length > 0) {
        result += 4
    }
    if (numberI.length > 0) {
        result += numberI.length * 1
    }
    return result

};
//refactored
var romanToInt = function (s) {
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
};