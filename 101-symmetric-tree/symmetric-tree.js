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
var isSymmetric = function(root) {
    
    const isSimilar = function(p, q) {
        if (p == q) return true
        if (p == null || q == null) return false;
        if (p.val !== q.val) return false;
        return isSimilar(p.left, q.right) && isSimilar(p.right, q.left)
    }

    return isSimilar(root.left, root.right)
};