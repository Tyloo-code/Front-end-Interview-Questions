// // 从上到下层序遍历二叉树
// 时间复杂度：每个点进队出队各一次，故渐进时间复杂度为 O(n)。
// 空间复杂度：队列中元素的个数不超过 n 个，故渐进空间复杂度为 O(n)。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var levelOrder = function(root) {
  if(!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let arr = [];
    let len = queue.length;
    while(len){
      let node = queue.shift();
      arr.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
      len--;
    }
    res.push(arr);
  }
  return res;
};

