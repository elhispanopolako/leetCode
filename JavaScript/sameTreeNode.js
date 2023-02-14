//mine
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null || q === null) {
        if (p == q) {
            return true
        } else {
            return false
        }
    }
    const fn = (node1, node2) => {
        if (node1.val == node2.val &&
            JSON.stringify(node1.left) === JSON.stringify(node2.left) &&
            JSON.stringify(node1.right) === JSON.stringify(node2.right)) {
            return true
        } else {
            return false
        }
    }
    return fn(p, q)
};
//other
var isSameTree = function (p, q) {
    return JSON.stringify(p) === JSON.stringify(q)
};