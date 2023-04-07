/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
    let n1 = 0
    let n2 = 1
    let nextTerm;
    for (let i = 0; i < n; i++) {
        nextTerm = n1 + n2
        n1 = n2
        n2 = nextTerm
    }
    return nextTerm
};
