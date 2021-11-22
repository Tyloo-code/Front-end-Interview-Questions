// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 递归不安全，对于严重线性化的二叉树，有可能栈溢出
// 方法一：递归法（深度优先） 时间复杂度O(N), 空间复杂度O(N),
var inorderTraversal = function(root) {
  const res = [];
  const inorder = (root) => {
    if(!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res;
};

// 方法二：迭代法    时间复杂度O(N), 空间复杂度O(N)
var inorderTraversal = function(root) {
  // 栈 先进后出
  // 前序遍历，出栈顺序：根左右; 入栈顺序：右左根
  // 中序遍历，出栈顺序：左根右; 入栈顺序：右根左
  // 后序遍历，出栈顺序：左右根; 入栈顺序：根右左
  const res = [];
  const stack = [];
  // root为空且stack为空，遍历结束
  while(root || stack.length){
    // 先根后左入栈
    while(root){
      stack.push(root);
      root = root.left;
    }
    // 此时root==null，说明上一步的root没有左子树
    // 1. 执行左出栈。因为此时root==null，导致root.right一定为null
    // 2. 执行下一次外层while代码块，根出栈。此时root.right可能存在
    // 3a. 若root.right存在，右入栈，再出栈
    // 3b. 若root.right不存在，重复步骤2
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

// 方法三： Morris 中序遍历        时间复杂度O(N), 空间复杂度O(1)
// 核心思想是：改变了整个树的结构，强行把一棵二叉树改成一段链表结构。
// if root.left 部分重构了左子树(把root和右子树挂到左子树的最右节点)，else是走到了最左节点的时候，会走一段链表到原来的root。然后过度到右子树，如果右子树是一条向右的链，就一直链下去到最后一个节点；如果右子树有”子左子树“，会回到root.left，继续后面的节点。
var inorderTraversal = function(root) {
  const res = [];
  let pre = null;

  while(root){
    if(root.left){
      //  第一部分：左子树的最右节点挂root
      pre = root.left;
      while(pre.right){
        pre = pre.right;
      }        
      pre.right = root;
      //  第二部分：root指向root的left
      let temp = root;
      root = root.left;
      //  第三部分：去掉root到root.left前的left
      temp.left = null;
    }else{
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};


// 方法四：颜色标记法（比迭代法慢，前中后普适性高）  时间复杂度O(N), 空间复杂度O(N)
var inorderTraversal = function(root) {
  const [WHITE, GRAY] = [0, 1]; // WHITE - 未访问的新结点； GRAY - 已访问的结点
  const res = [];
  const stack = [[WHITE, root]];
  let color, node;
  while (stack.length) {
      [color, node] = stack.pop(); // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
      if (!node) continue;
      if (color === WHITE) {
          // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
          stack.push([WHITE, node.right]);
          stack.push([GRAY, node]);
          stack.push([WHITE, node.left]);
      } else res.push(node.val);
  }
  return res;
};