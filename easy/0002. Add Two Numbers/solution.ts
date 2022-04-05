import ListNode from './ListNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let left = l1;
  let right = l2;
  let ansNode: ListNode = null;
  let pointerNode: ListNode = null; // use this node to iterate
  let carry = 0;
  while (left !== null || right !== null || carry === 1) {
    // if one of the two nodes is null and carry is 0, then the rest is equal to another node.
    if (left === null && carry === 0) {
      pointerNode.next = right;
      break;
    }

    if (right === null && carry === 0) {
      pointerNode.next = left;
      break;
    }

    const leftVal = left === null ? 0 : left.val;
    const rightVal = right === null ? 0 : right.val;
    let sum = leftVal + rightVal + carry;
    carry = 0;
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    if (ansNode === null) {
      ansNode = new ListNode(sum, null);
      pointerNode = ansNode;
    } else {
      pointerNode.next = new ListNode(sum, null);
      pointerNode = pointerNode.next;
    }

    left = left === null ? null : left.next;
    right = right === null ? null : right.next;
  }

  return ansNode;
}

export default addTwoNumbers;
