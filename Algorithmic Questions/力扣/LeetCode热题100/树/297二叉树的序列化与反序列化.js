// 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// DFS(递归) 时间复杂度O(N)  空间复杂度O(N)
// 序列化
var serialize = function(root) {
  if(!root) return 'X';                           // 遍历到 null 节点
  const left = serialize(root.left);              // 左子树的序列化结果
  const right = serialize(root.right);            // 右子树的序列化结果
  return root.val + ',' + left + ',' + right;     // 按 根,左,右 拼接字符串
};

// 反序列化
var deserialize = function(data) {
  const list = data.split(',');           // split成数组
  const buildTree = (list) => {           // 基于list构建当前子树
    const rootVal = list.shift();         // 弹出首项，获取它的“数据”
    if(rootVal === 'X') return null;      // 是X，返回null节点
    const root = new TreeNode(rootVal);   // 不是X，则创建节点
    root.left = buildTree(list);          // 递归构建左子树
    root.right = buildTree(list);         // 递归构建右子树
    return root;                          // 返回当前构建好的root
  }
  return buildTree(list);                 // 构建的入口
};