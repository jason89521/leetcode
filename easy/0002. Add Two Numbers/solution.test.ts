import ListNode from './ListNode';
import solution from './solution';

test('should be [7, 0, 8]', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  let ans = solution(l1, l2);
  expect(ans.val).toBe(7);
  ans = ans.next;
  expect(ans.val).toBe(0);
  ans = ans.next;
  expect(ans.val).toBe(8);
});

test('should be [0]', () => {
  const l1 = new ListNode(0);
  const l2 = new ListNode(0);

  expect(solution(l1, l2).val).toBe(0);
});

test('different length, should be [5, 5, 5]', () => {
  const l1 = new ListNode(2, new ListNode(9, new ListNode(4)));
  const l2 = new ListNode(3, new ListNode(6));
  let ans = solution(l1, l2);

  expect(ans.val).toBe(5);
  ans = ans.next;
  expect(ans.val).toBe(5);
  ans = ans.next;
  expect(ans.val).toBe(5);
});

test('overflow', () => {
  const l1 = new ListNode(9, new ListNode(9, new ListNode(9)));
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9)));
  let ans = solution(l1, l2);

  expect(ans.val).toBe(8);
  ans = ans.next;
  expect(ans.val).toBe(9);
  ans = ans.next;
  expect(ans.val).toBe(9);
  ans = ans.next;
  expect(ans.val).toBe(1);
});
