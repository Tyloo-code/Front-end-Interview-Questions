// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// 时间复杂度：O(n)，其中 n 为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
// 空间复杂度：O(n)。空间复杂度取决于递归的栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n) 的级别。

/**
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 方法一：递归法
var inorderTraversal = function(root) {
  const res = [];
  const inorder = (root) => {
    if(!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);              //调用中序遍历
  return res;
};

// 方法二：迭代法（颜色标记法）
var inorderTraversal = function(root) {
  const [WHITE, GRAY] = [0, 1];
  const res = [];
  const stack = [[WHITE, root]];
  let color, node;
  while(stack.length){
    [color, node] = stack.pop();     // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
    if(!node) continue;
    if(color === WHITE){
      // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
      stack.push([WHITE, node.right]);
      stack.push([GRAY, node]);
      stack.push([WHITE, node.left]);
    }else res.push(node.val);
  }
  return res;
};