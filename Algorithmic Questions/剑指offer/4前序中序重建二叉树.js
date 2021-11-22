// 重建二叉树
/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function reConstructBinaryTree(preorder, inorder){
  if(!preorder.length || !inorder.length) return null;
  const rootVal = preorder[0];                //定义根节点，前序遍历第一个数
  const node = new TreeNode(rootVal);
  
  // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
  for(var i = 0; i < inorder.length; i++){
    if(inorder[i] === rootVal) break;
  }

  node.left = reConstructBinaryTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = reConstructBinaryTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return node;
}