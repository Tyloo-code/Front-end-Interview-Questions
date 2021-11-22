// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
// 方法：递归 + 分治  
// 时间复杂度O(n*logK)   k为链表总数，n为合并两个链表所用时间  空间复杂度O(n)
var mergeKLists = function(lists) {
  let n = lists.length;
  if(n === 0) return null;
  let mergeTwoLists = (l1, l2) => {
    // 此函数为合并两个有序链表
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    }else{
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }

  let merge = (left, right) => {
    // 此函数为分治(归并)排序   
    if(left === right) return lists[left];
    let mid = (left + right) >> 1;
    let l1 = merge(left, mid);                                                                                                                                                                                                                                                                                                                                                                          
    let l2 = merge(mid + 1, right);          
    return mergeTwoLists(l1, l2);                                                                                                                                                                                                                                                                                                                                                                
  }
  return merge(0, n - 1)
};