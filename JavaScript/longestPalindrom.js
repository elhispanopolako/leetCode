//first
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    let isPalindrome = (x) => {
        return x == String(x).split('').reverse().join('')
    }
    let maxSize = 0
    let result = '';

    let arr = s.split('')
    for (let idx = 0; idx <= arr.length; idx++) {
        for (let j = idx + 1; j <= s.length; j++) {
            if (isPalindrome(arr.slice(idx, j).join('')) == true) {
                if (maxSize < arr.slice(idx, j).length) {
                    maxSize = arr.slice(idx, j).length
                    result = arr.slice(idx, j).join('')
                }
            }
        }
    }
    return result
};
//Optimize
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    let maxSize = 1;
    let result = s[0];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + maxSize; j <= s.length; j++) {
            let sub = s.substring(i, j);
            if (sub.length > maxSize && sub === sub.split('').reverse().join('')) {
                maxSize = sub.length;
                result = sub;
            }
        }
    }
    return result;
};
//Optimize more
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
};