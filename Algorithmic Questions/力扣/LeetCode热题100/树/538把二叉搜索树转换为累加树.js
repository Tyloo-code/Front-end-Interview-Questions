// 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
// 时间复杂度：O(n)，其中 n 是二叉搜索树的节点数。每一个节点恰好被遍历一次。
// 空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(log n)，最坏情况下树呈现链状，为 O(n)。

// 如果先访问右子树，反向的中序遍历，访问的节点值是递减的，之前访问的节点值都比当前的大，每次累加给 sum 即可。

var convertBST = function(root) {
  let sum = 0;
  const inOrder = (root) => {
    if(!root) return;           // 遍历到null节点，开始返回
    inOrder(root.right);        // 先进入右子树
    sum += root.val;            // 节点值累加给sum
    root.val = sum;             // 累加的结果，赋给root.val
    inOrder(root.left);         // 然后才进入左子树
  };
  inOrder(root);                // 递归的入口，从根节点开始
  return root;
};