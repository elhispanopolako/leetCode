//mine
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
    let words = s.trim().split(' ')
    return words[words.length - 1].length
};
//other
let lengthOfLastWord = function (s) {
    return s.trim().split(" ").pop().length;
};