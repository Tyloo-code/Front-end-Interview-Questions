// 请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot){
  return pRoot === null ? true : recur(pRoot.left, pRoot.right);
}

function recur(L,R){
  if(L === null && R === null) return true;
  if(L === null || R === null || L.val !== R.val) return false;
  return recur(L.left, R.right) && recur(L.right, R.left);
}