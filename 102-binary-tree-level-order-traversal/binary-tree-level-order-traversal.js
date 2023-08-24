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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    let result = []
    let queue = [root]
    let counter = 1;
    let level = 0

    while (queue.length != 0) {
        // Handle counter
        if (counter == 0){
            level ++
            counter = queue.length
        } 
        counter --

        //Handle node
        let node = queue.shift()
        if (node == null) continue
        if(!result[level]) result[level] = []
        result[level].push(node.val)
        queue.push(...[node.left, node.right])
    }
    
    return result;
};