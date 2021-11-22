// 请实现两个函数，分别用来序列化和反序列化二叉树
// 时间复杂度O(N),空间复杂度O(N)
// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }

// DFS
var serialize = function(root) {
  if(!root) return 'X';
  const left = serialize(root.left);
  const right = serialize(root.right);
  return root.val + ',' + left + ',' + right; // 按  根,左,右  拼接字符串
};

var deserialize = function(data) {
  const list = data.split(',');               // split成数组
  const buildTree = list => {                 // 基于list构建当前子树
    const rootVal = list.shift();             // 弹出首项，获取它的“数据”
    if(rootVal === 'X') return null;          // 是X，返回null节点
    const root = new TreeNode(rootVal);       // 不是X，则创建节点
    root.left = buildTree(list);              // 递归构建左子树
    root.right = buildTree(list);             // 递归构建右子树
    return root;                              // 返回当前构建好的root
  }
  return buildTree(list);
};
















// BFS
// 序列化
function Serialize(pRoot)
{
    const queue = [pRoot];
    let res = [];
    while(queue.length){
      const node = queue.shift();   // 考察出列的节点
      if(node){                     // 是真实节点，带出子节点入列
        res.push(node.val);         // 节点值推入res
        queue.push(node.left);      // 子节点入列，不管是不是null节点都入列
        queue.push(node.right);
      }else{                        // 是null节点，没有子节点入列
        res.push('#');              // # 推入res
      }
    }
    return res.join(',');           // 转成字符串
}
// 反序列化
function Deserialize(s)
{
    if(s === '#') return null;
    const list = s.split(',');       // 序列化字符串split成数组
    const root = new TreeNode(list[0]); // 获取首项，构建根节点
    const queue = [root];               // 根节点推入队列
    let cursor = 1;                     // 初始指向list第二项

    while(cursor < list.length){        // 指针越界，即扫完了序列化字符串
      const node = queue.shift();       // 考察出列的节点
      const leftVal = list[cursor];     // 它的左儿子的值
      const rightVal = list[cursor + 1];// 它的右儿子的值

      if(leftVal !== '#'){              // 是真实节点
        const leftNode = new TreeNode(leftVal);// 创建左儿子节点
        node.left = leftNode;           // 认父亲
        queue.push(leftNode);           // 自己也是父亲，入列
      }
      if(rightVal !== '#'){
        const rightNode = new TreeNode(rightVal);
        node.right = rightNode;
        queue.push(rightNode);
      }
      cursor += 2;                      // 一次考察一对儿子，指针加2
    }
    return root;
}