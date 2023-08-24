/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = []
    let n = 0
    while (head) {
        arr.push(head.val)
        head = head.next
        n++
    }

    let middle = n % 2 == 0? n/2  : Math.ceil(n/2) 
    let result = null;
    for ( let i = 0; i< middle; i ++) {
        result = new ListNode(arr[arr.length - 1 - i], result)
    }


    return result;
};