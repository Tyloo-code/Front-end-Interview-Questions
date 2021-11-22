// 删除链表中重复的节点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
  if (!pHead || !pHead.next) return pHead;
  if (pHead.val !== pHead.next.val) pHead.next = deleteDuplication(pHead.next);
  else {
    let move = pHead.next;
    while (move && pHead.val === move.val) {
      move = move.next;
    }
    return deleteDuplication(move);
  }
  return pHead;
}