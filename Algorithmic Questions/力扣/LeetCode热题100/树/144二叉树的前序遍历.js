// 时间复杂度O(N), 空间复杂度O(N)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 方法一：递归
var preorderTraversal = function(root) {
  const res = [];
  const preorder = (root) => {
    if(!root) return;
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  preorder(root);
  return res;
};

// 方法二：迭代(颜色选择法)
var preorderTraversal = function(root) {
  const [WHITE, GRAY] = [0, 1];
  const res = [];
  const stack = [[WHITE, root]];
  let color, node;
  while(stack.length){
    [color, node] = stack.pop();
    if(!node) continue;
    if(color === WHITE){
      stack.push([WHITE, node.right]);
      stack.push([WHITE, node.left]);
      stack.push([GRAY, node]);
    }else res.push(node.val);
  }
  return res;
};