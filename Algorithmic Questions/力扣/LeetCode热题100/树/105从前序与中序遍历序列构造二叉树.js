// 根据一棵树的前序遍历与中序遍历构造二叉树。
/*
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 时间复杂度O(N) 空间复杂度O(N)
const buildTree = (preorder, inorder) => {
  if (inorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);         // 建根
  const mid = inorder.indexOf(preorder[0]);       // 根据前序遍历找到中序遍历的根
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));  // slice包前不包后
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
