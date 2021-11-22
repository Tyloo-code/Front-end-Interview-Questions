//二叉树的镜像
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
// 时间复杂度 O(N)： 其中 N 为二叉树的节点数量，建立二叉树镜像需要遍历树的所有节点，占用 O(N) 时间。
// 空间复杂度 O(N) ： 最差情况下（当二叉树退化为链表），递归时系统需使用 O(N) 大小的栈空间。
function Mirror( root ) {
  if(!root) return null;
  Mirror(root.left);
  Mirror(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
}