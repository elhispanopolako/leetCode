//mine
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    if (!s.length || (s.length % 2) == 1) return false
    let result = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '{') {
            result.push('}');
        } else if (s[i] == '[') {
            result.push(']');
        } else if (s[i] == '(') {
            result.push(')');
        } else if (result.pop() != s[i]) {
            return false
        }
    }
    return !result.length
};
//other option
let isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;
};
//third
let isValid = function (s) {
    let stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        if (stack.length !== 0 && map[s[i]] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return !stack.length
};