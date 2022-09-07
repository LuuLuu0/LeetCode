/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let visitedSet = new Set();
    
    while (head !== null) {
        visitedSet.add(head);
        if (visitedSet.has(head.next)) {
            return head.next;
        }
        head = head.next;
    }
    return null;
};