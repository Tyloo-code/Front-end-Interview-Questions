// 二叉树中和为某一值的路径
var pathSum = function(root, sum) {
  if(!root) return [];
  const res = [];
  const dfs = (root, sum, tmp) => {
    if(root.val === sum && !root.left && !root.right) res.push(tmp);  // 如果满足节点值等于目标值，且该节点为叶子节点时，添加结果
    tmp.push(root.val);
    if(root.left) dfs(root.left, sum - root.val, [...tmp]);
    if(root.right) dfs(root.right, sum - root.val, [...tmp]);
  }
  dfs(root, sum, []);
  return res;
};