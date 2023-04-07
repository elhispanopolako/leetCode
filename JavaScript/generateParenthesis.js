/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
    let res = []
    let iterate = (str, open, close) => {
        if (open > n || close > n || close > open) return;
        if (str.length == n * 2 && open == close) {
            res.push(str)
            return;
        }
        iterate(str + '(', open + 1, close)
        iterate(str + ')', open, close + 1)
    }

    iterate('', 0, 0)
    return res;
};