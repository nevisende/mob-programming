/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let mainArray = [];

    function addLinkedListToMainArray(subArray) {
        mainArray.push(subArray.val);

        if (subArray.next != null) {
            addLinkedListToMainArray(subArray.next);
        }
    }

    for (let i = 0; i < lists.length; i++) {
        if (lists[i] != null) {
            addLinkedListToMainArray(lists[i]);
        }
    }

    mainArray = mainArray.sort((a, b) => a - b);

    let newList = null;
    for (i = mainArray.length - 1; i >= 0; i--) {
        newList = new ListNode(mainArray[i], newList);
    }

    return newList;
};