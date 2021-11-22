// 给定一个二叉树，检查它是否是镜像对称的。
// 时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)O。
// 空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。

var isSymmetric = function(root) {
  const check = (left, right) => {
    if(left === null && right === null) return true;         // 两个子树都为null，是对称的
    if(left && right) return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);    // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
    return false;          // 一个子树存在一个不存在，肯定不对称
  };
  if(root === null) return true;          // 如果传入的root就是null，对称
  return check(root.left, root.right);    // 否则，判断它的左右子树是否满足对称
};