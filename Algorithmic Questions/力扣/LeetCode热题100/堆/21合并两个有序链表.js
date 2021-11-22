// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
// 返回值：每一层调用都返回排序好的链表头
// 时间空间复杂度 O(m+n)

var mergeTwoLists = function(l1, l2) {
  if(l1 === null) return l2;
  if(l2 === null) return l1;
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};