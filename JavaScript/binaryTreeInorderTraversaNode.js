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
 * @return {number[]}
 */
let inorderTraversal = function (root) {
    let res = [];

    const fn = (node) => {
        if (!node) return;
        fn(node.left);
        res.push(node.val)
        fn(node.right);
    }

    fn(root);

    return res;
};
