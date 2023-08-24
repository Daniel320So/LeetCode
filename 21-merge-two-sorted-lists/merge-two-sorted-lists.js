/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let resultNode = null;
    let result = []
    while (list1 || list2) {

        if(list1 == null) {
            result.push(list2.val)
            list2 = list2.next
            continue
        }

        if(list2 == null) {
            result.push(list1.val)
            list1 = list1.next
            continue
        }

        if (list1.val <= list2.val) {
            result.push(list1.val)
            list1 = list1.next
        } else {
            result.push(list2.val)
            list2 = list2.next
        }
    }

    for (let i=0; i< result.length ; i++) {
        let val = result[result.length-1-i]
        resultNode = new ListNode(val, resultNode)
    }
    return resultNode
};