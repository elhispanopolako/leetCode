//first
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s == "") { return 0 }
    let arr = s.split('')
    let set = new Set(arr);
    arr.length = 0;
    arr.push(...set.values())
    let str = arr.join('')
    let maxLength = []
    for (let i = 0; i < arr.length; i++) {
        console.log(s.includes(str.substring(i)), str.substring(i))
        if (s.includes(str.substring(i)) == true) {
            maxLength.push(str.substring(i).split('').length)
        }

    }
    return Math.max(...maxLength)
};
//finish
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 && s.length === 1) return s.length;
    let set = new Set();
    let left = 0;
    let maxSize = 0;
    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize
};