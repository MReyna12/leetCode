function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const four = new ListNode(4);
const two = new ListNode(2, four);
const one = new ListNode(1, two);

const quatro = new ListNode(4);
const tres = new ListNode(3, quatro);
const uno = new ListNode(1, tres);

const mergeTwoLists = (list1, list2) => {
  let newList = new ListNode();
  let tail = newList;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) tail.next = list1;
  if (list2 !== null) tail.next = list2;

  return newList.next;
};

console.log(mergeTwoLists(one, uno));
