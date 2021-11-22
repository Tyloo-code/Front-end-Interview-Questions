// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

/*中序遍历为升序 */
// 时间复杂度 : O(n)，其中 n 为二叉树的节点个数。二叉树的每个节点最多被访问一次，因此时间复杂度为 O(n)
// 空间复杂度 : O(n)，其中 n 为二叉树的节点个数。栈最多存储 n 个节点，因此需要额外的 O(n) 的空间。
var isValidBST = function(root) {
  const res = [];
  const inorder = (root) => {
    if(!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);              //调用中序遍历
  
  for(let i = 0; i < res.length - 1; i++){
    if(res[i] >= res[i + 1]) return false;
  }
  return true;
};