function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const five = new ListNode(5);
const four = new ListNode(4, five);
const three = new ListNode(3, four);
const two = new ListNode(2, three);
const one = new ListNode(1, two);

const reverseList = function (head) {
  let current = head;
  let previous = null;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

// Practice Attempt - 1

// P: Head of a singly linked list
// R: Return a reversed linked list
// E: 1 -> 2 -> 3 // 3 -> 2 -> 1
// P: Need three pointers - previous which is set to null, current which is set to the head/current node, and a node.next value; flip the direction of the arrows and shift down one each time

const reverseList1 = (head) => {
  // Previous and current pointers
  let previous = null;
  let current = head;

  // While loop to run until arrows are flipped
  while (current !== null) {
    const next = current.next;
    current.next = previous; // Flips arrow
    previous = current;
    current = next;
  }

  return previous;
};
