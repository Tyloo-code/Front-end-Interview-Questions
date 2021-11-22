// 翻转一棵二叉树。
// 方法一：前序递归
var invertTree = function(root) {
  if(!root) return null;    // 遍历到null节点时，不用翻转，直接返回它本身
  invertTree(root.left);
  invertTree(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
};

// 方法二：层序遍历
var invertTree = function(root) {
  if(!root) return null;
  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    [cur.left, cur.right] = [cur.right, cur.left];
    if(cur.left) queue.push(cur.left);
    if(cur.right) queue.push(cur.right);
  }
  return root;
};