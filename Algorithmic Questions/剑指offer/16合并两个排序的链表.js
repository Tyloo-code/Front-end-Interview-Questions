//合并两个排序的链表
// 时间复杂度 O(M+N)：M, N分别为链表 l1 , l2 的长度，合并操作需遍历两链表。
// 空间复杂度 O(1)：节点引用 dum , cur 使用常数大小的额外空间。
var mergeTwoLists = function(l1, l2) {
  let dum = new ListNode(-1);
  let cur = dum;
  while(l1 && l2){
    if(l1.val < l2.val){
      dum.next = l1;
      l1 = l1.next;
    }else{
      dum.next = l2;
      l2 = l2.next;
    }
    dum = dum.next;
  }
  if(l1) dum.next = l1;
  if(l2) dum.next = l2;
  return cur.next;
};