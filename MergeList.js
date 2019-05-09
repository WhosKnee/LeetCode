/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // create new node to start return list
    let l3 = new ListNode();
    // create a curr pointer when traversing
    let curr = l3
    // traverse until either list is empty
    while(l1 && l2){
        // compare values
        if(l1.val <= l2.val){
            // set curr's next value
            curr.next = new ListNode(l1.val);
            // traverse forward
            l1 = l1.next;
            curr = curr.next;
        }
        else {
            curr.next = new ListNode(l2.val);
            l2 = l2.next;
            curr = curr.next
        }
    }
    // assign curr's next to the list of remaining nodes
    curr.next = l1 || l2
    // traverse l3 forward once to have the list we desire
    return l3.next;
};