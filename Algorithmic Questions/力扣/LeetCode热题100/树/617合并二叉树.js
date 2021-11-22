// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

// 时间复杂度：O(min(m,n))，其中 m 和 n 分别是两个二叉树的节点个数。
// 空间复杂度：O(min(m,n))，其中 m 和 n 分别是两个二叉树的节点个数。
var mergeTrees = function(root1, root2) {
  if(!root1) return root2;
  if(!root2) return root1;
  let root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
};
