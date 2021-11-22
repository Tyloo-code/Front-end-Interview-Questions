// 二叉搜索树与双向链表
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(root)
{
  let pre = null;
  let head = null;
  dfs(root);
  function dfs(cur) {
    if(!cur) return null;
    dfs(cur.left);             // 中序遍历 左根右
    if(!pre) head = cur;       // 初始化head
    else pre.right = cur;      // 如果存在pre 向右添加 下一个节点
    cur.left = pre;            // 双向链表 向左添加前一个节点指针
    pre = cur;                 // pre next 向下继续 递归
    dfs(cur.right);
  };
  return head;
}


