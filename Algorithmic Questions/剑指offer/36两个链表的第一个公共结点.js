// 两个链表的第一个公共结点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    let h1 = pHead1;
    let h2 = pHead2;

    while(h1 !== h2){
      h1 = h1 === null ? pHead2 : h1.next;
      h2 = h2 === null ? pHead1 : h2.next;
    }

    return h1;
}