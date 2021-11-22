// 请实现一个函数，用来判断一棵二叉树是不是对称的
function isSymmetrical(pRoot){
  return pRoot === null ? true : recur(pRoot.left, pRoot.right);
}
function recur(L,R){
  if(L === null && R === null) return true;
  if(L === null || R === null || L.val !== R.val) return false;
  return recur(L.left, R.right) && recur(L.right, R.left);
}