// 二叉树的下一个节点
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
    // 1.如果结点有右子树，右子树最左的结点为该节点的下一个结点；
    // 2.如果结点没有右子树，且该结点为它父结点的左子结点，那么该结点的下一个结点是它的父结点；
    // 3.如果结点没有右子树，且该结点为它父结点的右子结点，那么沿其父节点向上寻找，其中有父结点为上个父节点的左子节点，那么这上个父节点为该节点的下一个节点；

function GetNext(pNode){
  if(!pNode) return null;
  //情况一：如果该节点有右子树,一直找到所属右子树最左的节点就是下一个节点
  if(pNode.right !== null) {
    pNode = pNode.right;
    while(pNode.left !== null) pNode = pNode.left;
    return pNode;
  }
  //情况二：没有右子树,且是该节点父节点的左子树，那么下一个节点就是其父节点
  while(pNode.next !== null){
    if(pNode === pNode.next.left) return pNode.next;
    //情况三：当前节点是右节点的情况,接着向上寻找
    pNode = pNode.next;
  }
  //如果循环完都没有找到，证明当前节点是最后一个节点了，返回 null
  return null;
}