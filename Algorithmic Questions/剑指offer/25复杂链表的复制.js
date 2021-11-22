// 复杂链表的复制
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(head)
{
 if(!head) return null;
  let m = new Map();
  let node = head;
  while(node){                                       // 复制节点
    m.set(node, new RandomListNode(node.label));     // 构建源节点，新节点的键值对
    node = node.next;
  }
  node = head;
  while(node){
    m.get(node).next = node.next ? m.get(node.next) : null;
    m.get(node).random = node.random ? m.get(node.random) : null;
    node = node.next;
  }
  return m.get(head);
}