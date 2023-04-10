function isValidTS(s: string): boolean {
    if (!s.length || (s.length % 2) == 1) return false
    let result: Array<string> = []
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