// 从上到下打印二叉树
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
    const first = queue.shift();
    res.push(first.val);
    first.left && queue.push(first.left);
    first.right && queue.push(first.right);
  }
  return res;
} 