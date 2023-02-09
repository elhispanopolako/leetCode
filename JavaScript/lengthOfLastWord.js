//mine
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let words = s.trim().split(' ')
    return words[words.length - 1].length
};
//other
var lengthOfLastWord = function (s) {
    return s.trim().split(" ").pop().length;
};