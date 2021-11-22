// 链表环的入口节点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 数组方法
function EntryNodeOfLoop(pHead)
{
    const arr = [];
    while(pHead){
      if(arr.includes(pHead)) return pHead;
      else{
        arr.push(pHead);
      }
      pHead = pHead.next;
    }
    return null;
}

// 快慢指针方法
var detectCycle = function(head) {
  let fast = head, slow = head;
  while(true) {
    if(!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow) break;
  }
  fast = head;
  while(slow != fast){
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};