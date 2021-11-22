// 二叉搜索树的后序遍历序列
function VerifySquenceOfBST(postorder){
  let len = postorder.length;
  if(len < 2) return true;          // 若为叶子节点，则返回 true
  let root = postorder[len - 1];    // 后序遍历的最后一个元素为根节点
  for(var i = 0; i < len - 1; i++){
    if(postorder[i] > root) break;  //postorder[0,i]为左子树   postorder[i,len-1]为右子树 
  }
  // 判断右子树中的元素是否都大于 root，此处用到 every (数组 API，数组的每个元素都返回 true 则整体返回 true)
  let result = postorder.slice(i, len - 1).every(item => item > root);
  if(result){
    // 对左右子树进行递归调用,左右子树通过 i 进行分割
    return VerifySquenceOfBST(postorder.slice(0, i)) && VerifySquenceOfBST(postorder.slice(i, len - 1));
  }else{
    return false;
  }
}