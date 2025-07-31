// 1. Reverse Linked List II (reverseBetween)
var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let leftPre = dummy;
    let curr = head;

    for (let i = 0; i < left - 1; i++) {
        leftPre = leftPre.next;
        curr = curr.next;
    }

    let subListHead = curr;
    let prev = null;

    for (let i = 0; i <= right - left; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    leftPre.next = prev;
    subListHead.next = curr;

    return dummy.next;
};

// 2. Swap Nodes in Pairs (swapPairs)
var swapPairs = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }

    return dummy.next;
};

// 3. Rotate List (rotateRight)
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length += 1;
    }

    k = k % length;
    if (k === 0) return head;

    tail.next = head; // make it circular

    let newTail = head;
    for (let i = 1; i < length - k; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
