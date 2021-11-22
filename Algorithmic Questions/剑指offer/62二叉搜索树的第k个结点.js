// 给定一棵二叉搜索树，请找出其中的第k小的TreeNode结点。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function KthNode(pRoot, k){
  if(!pRoot || !k) return null;
  const res = [];
  centerSort(root, res);
  return res[k - 1];
}
const centerSort = (root, list) => {
  if(!root) return null;
  centerSort(root.left, list);
  list.push(root);
  centerSort(root.right, list);
}


// 方法二：
var kthSmallest = function(root, k) {
  let res = null;
  const inOrder = node => {
    if(node && k){
      inOrder(node,left);
      if(--k === 0){
        res = node.val;
        return
      }
      inOrder(node.right);
    }   
  }
  inOrder(root);
  return res
};