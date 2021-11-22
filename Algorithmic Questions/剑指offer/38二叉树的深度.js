// 二叉树的深度
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
  return pRoot === null ? 0 : Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right)) + 1
}