function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const five = new ListNode(5);
const four = new ListNode(4, five);
const three = new ListNode(3, four);
const two = new ListNode(2, three);
const one = new ListNode(1, two);

const removeNthFromEnd = (head, n) => {
  // Create a dummy node
  let dummy = new ListNode(0, head);
  // Create left and right pointer
  let left = dummy;
  let right = head;

  // While loop that runs while n is greater than 0 and right is not equal to null
  while (n > 0 && right !== null) {
    right = right.next;
    n -= 1;
  }

  // While loop that runs while right is not equal to null so we can get the left pointer before the nth node and the right pointer n spaces after the left pointer (which will be null)
  while (right !== null) {
    left = left.next;
    right = right.next;
  }

  // Delete the nth node (aka skip over it)
  left.next = left.next.next;

  return dummy.next;
};

console.log(removeNthFromEnd(one, 2));
