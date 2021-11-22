// 给你二叉树的根结点 root ，请你将它展开为一个单链表：
// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。前序遍历的时间复杂度是 O(n)，前序遍历之后，需要对每个节点更新左右子节点的信息，时间复杂度也是 O(n)。
// 空间复杂度：O(n)，其中 n 是二叉树的节点数。空间复杂度取决于栈（递归调用栈或者迭代中显性使用的栈）和存储前序遍历结果的列表的大小，栈内的元素个数不会超过 n，前序遍历列表中的元素个数是 n。

// 右子树转成的单链表，只要获取它的头结点，等左子树生成的链表生成好，接到它的尾节点
// 左子树生成的单链表，处理稍微复杂一点
// 要获取它的头结点，它要接到根节点的right
// 要获取它的尾节点，通过一直找右节点，找到尾节点，供连接
// 左子树生成的链表两端都接好后，root.left 要置为 null，不然 root 还拖着个左子树
var flatten = function(root) {
  const helper = (root) => {                    // 将当前子树转成一个单链表
    if(!root) return null;
    if(root.right) helper(root.right);   // 先生成右子树的单链表
    if(root.left){                              // 如果有左子树，生成单链表然后搬运过去
      const leftFirst = helper(root.left);      // 生成单链表，并获取头结点
      let leftLast = leftFirst;                 // leftLast是单链表的尾节点
      while (leftLast.right) {                  // 一直找右节点，获取到单链表的尾节点
        leftLast = leftLast.right;
      }     
      leftLast.right = root.right;              // 尾节点后面接左子树展平后的单链表      
      root.right = leftFirst;                   // 根节点的right改成leftFirst
      root.left = null;                         // root.left置为null             
    }
    return root;
  }
  helper(root);
};
