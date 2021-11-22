// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
// 时间复杂度是 O(nlogn)
// 空间复杂度是 O(logn)

// 方法一：链表转换数组排序
var sortList = function(head, r = []) {
    if (!head) return null;
    // 将链表的next指针打断，放入数组
    while (head) {
        r.push(head);
        var tmp = head.next;
        head.next = null;
        head = tmp;
    }
    // 对数组用sort比较val属性排序，
    r.sort((a, b) => a.val - b.val).reduce((p, v) => p.next = v); //连接元素之间的指针
    return r[0]
};

// 方法二：归并排序
var sortList = function(head) {
  if(!head || !head.next) return head;
  let slow = head, fast = head;           // 快慢指针
  let preSlow = null;                     // 保存slow的前一个结点
  while(fast && fast.next){
    preSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  preSlow.next = null;                    // 断开，分成两链
  const l = sortList(head);               // 已排序的左链
  const r = sortList(slow);               // 已排序的右链
  return merge(l, r);                     // 合并已排序的左右链，一层层向上返回
};
// 合并两个有序链表
function merge(l1, l2){
  const dummy = new ListNode(0);
  let prev = dummy;                       // 用prev去扫，先指向dummy
  while(l1 && l2){
    if(l1.val < l2.val){
      prev.next = l1;
      l1 = l1.next;
    }else{
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;                     // prev.Next确定了，prev指针推进
  }
  if(l1) prev.next = l1;
  if(l2) prev.next = l2;
  return dummy.next;                      // 真实头结点
}