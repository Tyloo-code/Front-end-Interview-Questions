// 判断平衡二叉树
// 方法一: 深度优先遍历
var isBalanced = function(root) {
  return recur(root) != -1;
};
const recur = root => {
  if(root === null) return 0;
  let left = recur(root.left);
  let right = recur(root.right);
  if(left === -1) return -1;
  if(right === -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}

// 方法二: 广度优先遍历
function IsBalanced_Solution(pRoot){
  if(!pRoot) return true;
  let queue = [pRoot];
  let nodes = [];
  while(queue.length){
    let node = queue.shift();
    nodes.unshift(node);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  for(let node of nodes){
    let left = node.left ? node.left.val : 0;
    let right = node.right ? node.right.val : 0;
    if(Math.abs(left - right) > 1) return false;
    node.val = Math.max(left,right) + 1
  }
  return true;
}


