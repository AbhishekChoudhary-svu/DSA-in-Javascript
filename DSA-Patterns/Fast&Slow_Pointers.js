// 1. Find the Duplicate Number
// Given an array of n + 1 integers where each integer is between 1 and n, find the duplicate number using cycle detection.
function findDuplicate(nums) {
    let slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}

// 2. Happy Number
// Determine if a number is a "happy number" (eventually transforms into 1 by repeatedly replacing it with the sum of the squares of its digits).
function isHappy(n) {
    function sumOfSquare(num) {
        let str = String(num);
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            let digit = Number(str[i]);
            sum += digit * digit;
        }
        return sum;
    }
    let slow = n;
    let fast = sumOfSquare(n);

    while (fast !== 1 && slow !== fast) {
        slow = sumOfSquare(slow);
        fast = sumOfSquare(sumOfSquare(fast));
    }
    return fast === 1;
}

// 3. Reorder List (Linked List)
// Given a singly linked list, reorder it in the order: first node, last node, second node, second last node, etc.
function reorderList(head) {
    if (!head || !head.next || !head.next.next) return;

    // Step 1: Find the middle (end of 1st half)
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let prev = null, curr = slow, next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Step 3: Merge two halves
    let first = head;
    let second = prev;
    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
}
