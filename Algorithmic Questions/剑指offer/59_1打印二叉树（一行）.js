// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
var levelOrder = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];
  while(queue.length){
    let node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};