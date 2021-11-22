// 创建BinarySearchTree
function BinarySerachTree() {
  // 创建节点构造函数
  function Node(key) {
      this.key = key
      this.left = null
      this.right = null
  }

  // 保存根的属性
  this.root = null

  // 二叉搜索树相关的操作方法
  // 向树中插入数据
  BinarySerachTree.prototype.insert = function (key) {
      // 1.根据key创建对应的node
      var newNode = new Node(key)

      // 2.判断根节点是否有值
      if (this.root === null) {
          this.root = newNode
      } else {
          this.insertNode(this.root, newNode)
      }
  }

  BinarySerachTree.prototype.insertNode = function (node, newNode) {
      if (newNode.key < node.key) { // 1.准备向左子树插入数据
          if (node.left === null) { // 1.1.node的左子树上没有内容
              node.left = newNode
          } else { // 1.2.node的左子树上已经有了内容
              this.insertNode(node.left, newNode)
          }
      } else { // 2.准备向右子树插入数据
          if (node.right === null) { // 2.1.node的右子树上没有内容
              node.right = newNode
          } else { // 2.2.node的右子树上有内容
              this.insertNode(node.right, newNode)
          }
      }
  }

  // 获取最大值和最小值
  BinarySerachTree.prototype.min = function () {
      var node = this.root
      while (node.left !== null) {
          node = node.left
      }
      return node.key
  }

  BinarySerachTree.prototype.max = function () {
      var node = this.root
      while (node.right !== null) {
          node = node.right
      }
      return node.key
  }

  // 搜搜特定的值
  BinarySerachTree.prototype.search = function (key) {
      var node = this.root
      while (node !== null) {
          if (node.key > key) {
              node = node.left
          } else if (node.key < key) {
              node = node.right
          } else {
              return true
          }
      }
      return false
  }
   // 遍历方法
    // 先序遍历
    BinarySerachTree.prototype.preOrderTraversal = function (handler) {
      this.preOrderTranversalNode(this.root, handler)
  }

  BinarySerachTree.prototype.preOrderTranversalNode = function (node, handler) {
      if (node !== null) {
          handler(node.key)
          this.preOrderTranversalNode(node.left, handler)
          this.preOrderTranversalNode(node.right, handler)
      }
  }

  // 中序遍历
  BinarySerachTree.prototype.inOrderTraversal = function (handler) {
      this.inOrderTraversalNode(this.root, handler)
  }

  BinarySerachTree.prototype.inOrderTraversalNode = function (node, handler) {
      if (node !== null) {
          this.inOrderTraversalNode(node.left, handler)
          handler(node.key)
          this.inOrderTraversalNode(node.right, handler)
      }
  }

  // 后续遍历
  BinarySerachTree.prototype.postOrderTraversal = function (handler) {
      this.postOrderTraversalNode(this.root, handler)
  }

  BinarySerachTree.prototype.postOrderTraversalNode = function (node, handler) {
      if (node !== null) {
          this.postOrderTraversalNode(node.left, handler)
          this.postOrderTraversalNode(node.right, handler)
          handler(node.key)
      }
  }
}

var bst = new BinarySerachTree()
// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
//先序遍历
var resultString = ""
bst.preOrderTraversal(function (key) {
    resultString += key + " "
})
console.log(resultString)
console.log(bst.max())
console.log(bst.min())
console.log(bst.search(10))