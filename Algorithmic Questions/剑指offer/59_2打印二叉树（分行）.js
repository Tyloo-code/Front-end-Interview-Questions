// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
var levelOrder = function(root) {
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
    const tmp = [];
    let len = queue.length;
    while(len--){
      let node = queue.shift();
      tmp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(tmp);    
  }
  return res;
};