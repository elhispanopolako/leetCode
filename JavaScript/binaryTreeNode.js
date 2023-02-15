/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (node, node2) {
    const fn = (node, node2) => {
        if (node2 === undefined) {
            node2 = node.right;
            node = node.left
        }
        if (node == null && node2 == null) return true
        if (node == null || node2 == null || node.val !== node2.val) return false
        return fn(node.left, node2.right) && fn(node.right, node2.left)
    }
    return fn(node, node2)
};
//final
var isSymmetric = function (node1, node2) {
    if (node2 === undefined) {
        node2 = node1.right;
        node1 = node1.left;
    }
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null || node1.val !== node2.val) return false;
    return isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left);
};
//other
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
};

const isMirror = (leftNode, rightNode) => {
    if (leftNode == null && rightNode == null) return true;
    if (leftNode == null || rightNode == null) return false;
    if (leftNode.val !== rightNode.val) return false;

    return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left);
}