//反转链表
// 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)。
function ReverseList(pHead)
{
    let prev = null;
    let cur = pHead;
    while(cur){
      let next = cur.next;
      cur.next = prev;     // 反转
      prev = cur;
      cur = next;
    }
    return prev;
}

function ReverseList(head)
{
   let [p, c] = [null, head]
   while (c) [c.next, p, c] = [p, c, c.next]
   return p
}