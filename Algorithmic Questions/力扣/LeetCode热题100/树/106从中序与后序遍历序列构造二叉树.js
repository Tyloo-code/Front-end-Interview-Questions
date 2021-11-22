// 根据一棵树的中序遍历与后序遍历构造二叉树。
// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/tu-jie-gou-zao-er-cha-shu-wei-wan-dai-xu-by-user72/
/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  const root = new TreeNode(postorder[postorder.length - 1]);         // 建根
  const mid = inorder.indexOf(postorder[postorder.length - 1]);       
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));  // slice包前不包后   中左拼后左
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, inorder.length - 1));    //中右拼后右
  return root;
};