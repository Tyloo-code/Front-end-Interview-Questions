// 树的子结构
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 时间复杂度 O(MN) ： 其中 M,N 分别为树 A 和 树 B 的节点数量；先序遍历树 A 占用 O(M)，每次调用 recur(A, B) 判断占用 O(N) 。
// 空间复杂度 O(M)： 当树 A 和树 B 都退化为链表时，递归调用深度最大。当 M≤N 时，遍历树 A 与递归判断的总递归深度为 M ；当 M>N 时，最差情况为遍历至树 A 叶子节点，此时总递归深度为 M。

// 判断 B 是否是 A 的子结构。是，返回 true；否则，尝试 A 的左右子树
function HasSubtree(pRoot1, pRoot2)
{
   if(!pRoot1 || !pRoot2) return false;    // 题目约定：约定空树不是任意一个树的子结构
   return (
     isSubTree(pRoot1, pRoot2) ||          //比较当前节点值
     HasSubtree(pRoot1.left, pRoot2) ||    //比较左右节点值
     HasSubtree(pRoot1.right, pRoot2)
   );
}

// 封装“判断 B 是否是 A 的子结构”的具体逻辑。
function isSubTree(pRoot1, pRoot2){
   if (!pRoot2) return true;          // B树遍历完了，说明B是A的子结构
   if (!pRoot1) return false;         // A遍历完了，但是B还没有遍历完，那么B肯定不是A的子结构
   if (pRoot1.val !== pRoot2.val) return false;
   return isSubTree(pRoot1.left, pRoot2.left) && isSubTree(pRoot1.right, pRoot2.right);
}