// 时间复杂度O(N), 空间复杂度O(N)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//方法一：递归 
var postorderTraversal = function(root) {
  const res = [];
  const postorder = (root) => {
    if(!root) return;
    postorder(root.left);
    postorder(root.right);
    res.push(root.val);
  }
  postorder(root);
  return res;
};
// 方法二：迭代（颜色选择）
var postorderTraversal = function(root) {
  const [WHITE, GRAY] = [0, 1];
  const res = [];
  const stack = [[WHITE, root]];
  let color, node;
  while(stack.length){
    [color, node] = stack.pop();
    if(!node) continue;
    if(color === WHITE){
      stack.push([GRAY, node]);
      stack.push([WHITE, node.right]);
      stack.push([WHITE, node.left]);
    }else res.push(node.val);
  }
  return res;
};