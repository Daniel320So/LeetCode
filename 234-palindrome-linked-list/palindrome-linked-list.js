/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var numberArray = [head.val]

    while (head.next){
        head = head.next
        numberArray.push(head.val)
    }
    
    var count = numberArray.length
   
    for (var i=0; i<numberArray.length/2; i++) {
        if (numberArray[i] !== numberArray[count-1-i]) {
            return false
        } 
    }
    return true
};