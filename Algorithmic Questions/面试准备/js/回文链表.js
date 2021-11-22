// 请判断一个链表是否为回文链表。
// 方法一：转成数组 时间复杂度O(N)  空间复杂度O(N)
var isPalindrome = function (head) {
  const vals = [];
  while(head){                                      // 丢进数组里
    vals.push(head.val);
    head = head.next;
  }
  let start = 0, end = vals.length - 1;             // 双指针
  while(start < end){
    if(vals[start] !== vals[end]) return false;     // 理应相同，如果不同，不是回文
    start++;
    end--;                                          // 双指针移动
  }
  return true;                                      // 循环结束也没有返回false，说明是回文
};

// 方法二：快慢指针 时间复杂度O(N)  空间复杂度O(1)
var isPalindrome = function (head) {
  if(head === null || head.next === null) return true;
  let fast = head;
  let slow = head;
  let prev;
  while(fast && fast.next){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;                    // 断成两个链表
  // 翻转后半段
  let head2 = null;
  while(slow){
    const tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  // 比对
  while(head && head2){
    if(head.val !== head2.val) return false;
    head = head.next;
    head2 = head2.next;
  }
  return true;
}

