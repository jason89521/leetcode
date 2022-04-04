import ListNode from './ListNode';
import mergeTwoLists from './mergeTwoLists';

test('should return [1,1,2,3,4,4]', () => {
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);
  const list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);

  let node = mergeTwoLists(list1, list2);
  const list: number[] = [];
  while (node) {
    list.push(node.val);
    node = node.next;
  }
  expect(list).toEqual([1, 1, 2, 3, 4, 4]);
});

test('should return [1,3,4]', () => {
  const list1 = null;
  const list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);

  let node = mergeTwoLists(list1, list2);
  const list: number[] = [];
  while (node) {
    list.push(node.val);
    node = node.next;
  }
  expect(list).toEqual([1, 3, 4]);
});

test('should return []', () => {
  const list1 = null;
  const list2 = null;

  let node = mergeTwoLists(list1, list2);
  const list: number[] = [];
  while (node) {
    list.push(node.val);
    node = node.next;
  }
  expect(list).toEqual([]);
});
