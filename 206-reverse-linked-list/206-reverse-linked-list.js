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
var reverseList = function(head) {
    let current = head;
    let previous = null;
    
    while (current !== null) {
        // save the next value of the current
        let next = current.next;
        // we set currents next pointer to the previous node
        current.next = previous;
        // we then have to change the previous to become the new current
        previous = current;
        // we then change the current to be the next
        current = next;
    }
    return previous;
};