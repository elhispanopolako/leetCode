//first
/**
 * @param {string} s
 * @return {number}
 */
let longestPalindromeSubseq = function (s) {
    if (s.length == 1) return 1
    if (s === s.split('').reverse().join('')) {
        return s.length
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let count = 0
        for (let j = 0; j < s.length; j++) {
            if (s.charAt(i) === s.charAt(j)) {
                count++
            }
        }
        if (count > res) {
            res = count
        }
    }
    return res
};
let longestPalindromeSubseq2 = function (s) {

    let dp = Array(s.length).fill().map(v => Array(s.length).fill(0));
    for (let start = s.length - 1; start >= 0; start--) {
        for (let end = 0; end < s.length; end++) {
            if (start > end) {
                dp[start][end] = 0;
            } else if (start === end) {
                dp[start][end] = 1;
            } else if (s[start] === s[end]) {
                dp[start][end] = 2 + dp[start + 1][end - 1];
            } else {
                dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
            }
        }
    }
    return dp[0][s.length - 1]
};