//new array
/**
 * @param {character[]} chars
 * @return {number}
 */
let compress = function (chars) {
    let res = []
    let actual = chars[0]
    let count = 0
    res.push(chars[0])
    for (let char of chars) {
        if (char !== actual) {
            if (count > 1) { res.push(count) }
            count = 0
            res.push(char)
            actual = char
        }
        count++
    }
    if (count > 1) { res.push(count) }
    return res.join('').split('')
};
//refactored
function compress(chars) {
    const result = []
    let currChar = chars[0]
    let count = 1

    for (let i = 1; i <= chars.length; i++) {
        if (i === chars.length || chars[i] !== currChar) {
            result.push(currChar)
            if (count > 1) result.push(count.toString())
            if (i < chars.length) currChar = chars[i]
            count = 1
        } else {
            count++
        }
    }

    return result.join('').split('')
}
//modifying firs array
function compress(chars) {
    let currChar = chars[0]
    let count = 1
    let idx = 0

    for (let i = 1; i <= chars.length; i++) {
        if (i === chars.length || chars[i] !== currChar) {
            chars[idx] = currChar
            idx++
            if (count > 1) {
                for (let digit of count.toString()) {
                    chars[idx] = digit
                    idx++
                }
            }
            if (i < chars.length) {
                currChar = chars[i]
            }
            count = 1
        } else {
            count++
        }
    }

    chars.splice(idx, chars.length - idx)

    return chars
}