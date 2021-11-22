var reverseList = function (head) {
  // 闭包
  if (head === undefined || head === null) return null
  var originalHead = head
  var reverseHead
  var reverse = function (head) {
      if (head.next === null) {
          reverseHead = head
          return head
      } else {
          var node = reverse(head.next)
          node.next = head
          if (originalHead === head) {
              head.next = null
              return reverseHead
          } else {
              return head
          }
      }
  }
  return reverse(head)
};

