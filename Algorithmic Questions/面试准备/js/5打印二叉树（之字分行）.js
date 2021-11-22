// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
// 借助 level 变量标记层数，当 level 为偶数的时候，镜像翻转遍历结果。代码实现如下：
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var levelOrder = function(root) {
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
    const tmp = [];
    let len = queue.length;
    while(len--){
      const node = queue.shift();
      tmp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.length % 2 === 1 ? res.push(tmp.reverse()) : res.push(tmp); // 余数为0，第一层（奇数层）正常放入，余数为1，第二层（偶数层）取反再放入
  }
  return res;
};