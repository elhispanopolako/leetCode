/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let re = /[a-zA-Z0-9]/gm
    let res = s.trim().split('').filter(x => x.match(re)).join('').toLowerCase()
    let ser = s.trim().split('').reverse().filter(x => x.match(re)).join('').toLowerCase()


    return res == ser
};