import ListNode from './ListNode';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let iterator = head;
  while (list1 !== null && list2 !== null) {
    const list1Val = list1.val;
    const list2Val = list2.val;
    if (list1Val <= list2Val) {
      iterator.next = new ListNode(list1Val);
      list1 = list1.next;
    } else {
      iterator.next = new ListNode(list2Val);
      list2 = list2.next;
    }

    iterator = iterator.next;
  }

  iterator.next = list1 === null ? list2 : list1;

  return head.next;
}

export default mergeTwoLists;
