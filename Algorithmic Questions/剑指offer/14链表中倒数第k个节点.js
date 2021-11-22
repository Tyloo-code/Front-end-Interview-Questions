//链表中倒数第k个节点
// 时间复杂度 O(N)： N 为链表长度；总体看， former 走了 N 步， latter 走了(N−k) 步。
// 空间复杂度 O(1)： 双指针 former , latter 使用常数大小的额外空间。
function FindKthToTail( head ,  k ) {
  let fast = head, slow = head;
  while(k && fast){
      fast = fast.next;
      k--;
  }
  if(k) return null;
  while(fast){
      fast = fast.next;
      slow = slow.next;
  }
  return slow;
}