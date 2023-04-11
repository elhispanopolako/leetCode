/**
 * @param {string} s
 * @return {string}
 */
let removeStars = function (s) {
    let re = /[a-z]\*/mg
    s = s.replace(re, '')
    let starsLength = s.split('').filter((x) => x == '*').length
    for (let i = 0; i < starsLength; i++) {
        s = s.replace(re, '')
    }
    return s
};
//other approach
let removeStars2 = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*') {
            res.push(s[i])
        } else {
            res.pop()
        }
    }
    return res.join('')
};