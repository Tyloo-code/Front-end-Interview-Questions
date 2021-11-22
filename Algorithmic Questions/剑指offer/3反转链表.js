// 链表反转
// 迭代解法
var reverseList = function(head) {
  let prev = null, curr = head;
  while(curr){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// 递归解法
var reverseList = function(head) {
  if(head === null || head.next === null) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};