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
  // Create new list for nodes to be merged into
  let list3 = new ListNode();
  let tail = list3;

  // While list1 and list2 are not empty
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
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

  return list3.next;
};

console.log(mergeTwoLists(one, uno));

// Practice Attempt - 1
// Merge the two lists, with lesser values going first
const mergeTwoLists1 = (list1, list2) => {
  let list3 = new ListNode();
  let tail = list3;

  // While list1 and list2 are not empty
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1.val;
      list1 = list1.next;
    } else {
      tail.next = list2.val;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) tail.next = list1;
  if (list2 !== null) tail.next = list2;

  return list3.next;
};

// Practice Attempt - 2

// P: Two heads for two sorted lists
// R: Return the head of the merged linked list--said list must remain sorted.
// E: 1 -> 2 -> 4 & 1 -> 1 -> 3 -> 4 // 1 -> 1 -> 2 -> 3 -> 4 -> 4
// P: Create a third list with a dummy node; conditional to compare the initial head values, if one is lesser than the other then make it the next node of the dummy node; the list that contained said lesser node value is then shifted to the next node
// and the comparison begins again; this process continues until one of the two lists are undefined (because we've iterated through all nodes of the applicable list); we then add remaining nodes from list that has not been fully traversed
// to the new list; we then return the new list, starting at the next node of the initial node in said list because we don't need to include the dummy node

const mergeTwoLists2 = (list1, list2) => {
  // Third list and dummy node creation
  const list3 = new ListNode();
  let dummyNode = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      dummyNode.next = list1;
      list1 = list1.next;
    } else {
      dummyNode.next = list2;
      list2 = list2.next;
    }
    dummyNode = dummyNode.next;
  }

  // if list1 values still remain then add remainder to new list
  if (list1 !== null) dummyNode.next = list1;
  if (list2 !== null) dummyNode.next = list2;

  // Return head of new list
  return list3.next;
};
