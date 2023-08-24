/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let arr = []
    let increased = 0;

    while (l1 || l2) {

        // when l1 & l2 are not the same length, update val

        let l1Val;
        let l2Val;

        if (l1) {
            l1Val = l1.val;
            l1 = l1.next;
        } else {
            l1Val = 0;
            l1 = null;
        }

        if (l2) {
            l2Val = l2.val;
            l2 = l2.next;
        } else {
            l2Val = 0;
            l12 = null;
        }

        // calculate the sum
        let sum = l1Val + l2Val + increased;
        increased = 0;

        // put integer into array
        if ( sum >= 10) {
            increased = 1;
            sum  = sum - 10;
        } 
        arr.push(sum);
    }

    // Handle adding the last increased value
    if (increased) arr.push(1);
    let node;

    for (let i=arr.length; i>0; i--) {
        node = new ListNode(arr[i-1], node)
    }

    return node
};