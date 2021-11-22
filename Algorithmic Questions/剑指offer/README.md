---
title: '【JS】手撕剑指offerⅡ'
date: 2021-05-13 14:25:50
tags: []
published: true
hideInList: false
feature: 
isTop: false
---
>本文题目源自[牛客网](https://www.nowcoder.com/ta/coding-interviews?page=1)，与[Leetcode](https://leetcode-cn.com/problemset/lcof/)上有些许差异
文章部分内容来自互联网，如有版权问题欢迎与我联系~

>特别鸣谢 以下几位大佬的图解和思路(包括但不完全)
[Krahets](https://leetcode-cn.com/u/jyd/)
[心谭](https://leetcode-cn.com/u/xin-tan/)
[笨猪爆破组](https://leetcode-cn.com/u/xiao_ben_zhu/)
[Sweetiee](https://leetcode-cn.com/u/sweetiee/)
[数据结构和算法](https://leetcode-cn.com/u/sdwwld/)
[liweiwei1419](https://leetcode-cn.com/u/liweiwei1419/)
[负雪明烛](https://leetcode-cn.com/u/fuxuemingzhu/)
[Demigodliu](https://leetcode-cn.com/u/demigodliu/)


# 1. 二维数组中的查找
## 1.🎨题目描述
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
[
  [1,2,8,9],
  [2,4,9,12],
  [4,7,10,13],
  [6,8,11,15]
]
给定 target = 7，返回 true。
给定 target = 3，返回 false。

## 2. 🧠解题思路
1. 从矩阵 matrix `左下角`元素（索引设为 (i, j) ）开始遍历，并与目标值对比：
     * 当 matrix[i][j] > target 时，执行 i-- ，即消去第 i 行元素；
     * 当 matrix[i][j] < target 时，执行 j++ ，即消去第 j 列元素；
     * 当 matrix[i][j] = target 时，返回 true，代表找到目标值。

2. 若行索引或列索引越界，则代表矩阵中无目标值，返回 false。

## 3. 🍭复杂度与代码
**时间复杂度** O(M+N)：其中，N 和 M 分别为矩阵行数和列数，此算法最多循环 M+N 次。
**空间复杂度** O(1) : i, j 指针使用常数大小额外空间。
```
function Find(target, array)
{
   let i = array.length - 1, 
       j = 0;
   while(i >= 0 && j < array[0].length){
     if(array[i][j] > target) i--;
     else if(array[i][j] < target) j++;
     else return true;
   }
   return false;
}
```

# 2. 替换空格
## 1. 🎨题目描述
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

## 2. 🧠解题思路
### 1. 原生API法
JavaScript有replace方法，所以一行正则就搞定
### 2. 数组方法（遍历添加）
利用js的split()和join()方法，自己模拟

## 3. 🍭复杂度与代码
**时间复杂度** O(N)
**空间复杂度** O(N)
### 1. 原生API法
```
function replaceSpace( s ) {
  return s.replace(/ /g,'%20')
}
```
### 2. 数组遍历法
```
var replaceSpace = function(s) {
  return  s.split(' ').join("%20");
};
```

# 3. 从尾到头打印链表
## 1. 🎨题目描述
输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

## 2. 🧠解题思路
利用数组特性，使用unshift()方法，将链表的每一项从数组头插入数组，形成倒叙

## 3. 🍭复杂度与代码
时间复杂度 O(N)： 遍历链表，递归 N 次。
空间复杂度 O(N)： 系统递归需要使用 O(N)) 的栈空间。
```
function printListFromTailToHead(head)
{
    let nums = []
    let node = head
    //遍历链表
    while(node !== null) {
        nums.unshift(node.val)
        node = node.next
    }
    return nums
}
```

# 4. 重建二叉树
## 1. 🎨题目描述
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

## 2. 🧠解题思路
根据以上性质，可得出以下推论：
1. 前序遍历的首元素 为 树的根节点 node 的值。
2. 在中序遍历中搜索根节点 node 的索引 ，可将 中序遍历 划分为 [ 左子树 | 根节点 | 右子树 ] 。
3. 根据中序遍历中的左 / 右子树的节点数量，可将 前序遍历 划分为 [ 根节点 | 左子树 | 右子树 ] 。
![](https://ttarea.com/post-images/1621341323924.png)
>通过以上三步，可确定**三个节点** ：1.树的根节点、2.左子树根节点、3.右子树根节点。
对于树的左、右子树，仍可使用以上步骤划分子树的左右子树。

注意：本文方法只适用于 “无重复节点值” 的二叉树。

## 3. 🍭复杂度与代码
时间复杂度 O(N) ： 其中 N 为树的节点数量。
空间复杂度 O(N) ：最差情况下，树退化为链表，递归深度达到 NN ，占用 O(N)O(N) 额外空间
```
function reConstructBinaryTree(preorder, inorder){
  if(!preorder.length || !inorder.length) return null;
  const rootVal = preorder[0];                //定义根节点，前序遍历第一个数
  const node = new TreeNode(rootVal);
    // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
  for(var i = 0; i < inorder.length; i++){
    if(inorder[i] === rootVal) break;
  }

  node.left = reConstructBinaryTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = reConstructBinaryTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return node;
}
```

# 5. 两个栈实现队列
## 1. 🎨题目描述
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1621342330291.png)
>函数设计：
>题目只要求实现 **加入队尾**appendTail() 和 **删除队首**deleteHead() 两个函数的正常工作，因此我们可以设计栈 A 用于加入队尾操作，栈 B 用于将元素倒序，从而实现删除队首元素。

* **加入队尾** appendTail()函数： 将数字 val 加入栈 A 即可。
* **删除队首** deleteHead()函数： 有以下三种情况。
     1. 当栈 B 不为空： B中仍有已完成倒序的元素，因此直接返回 B 的栈顶元素。
     2. 否则，当 A 为空： 即两个栈都为空，无元素，因此返回 -1−1 。
     3. 否则： 将栈 A 元素全部转移至栈 B 中，实现元素倒序，并返回栈 B 的栈顶元素。

## 3. 🍭复杂度与代码
时间复杂度O(N)
空间复杂度 O(N) ： 最差情况下，栈 A 和 B 共保存 N 个元素。
```
const inStack = [];
const outStack = [];

function push(node)
{
   inStack.push(node);
}

function pop()
{
   if (outStack.length) {
       return outStack.pop()
   }else {
       while(inStack.length){
           outStack.push(inStack.pop());
       }
       return outStack.pop();
   }
}
```

# 6.  旋转数组的最小数字
## 1. 🎨题目描述
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

## 2. 🧠解题思路
首先，创建两个指针 left, right 分别指向 numbers 首尾数字，然后计算出两指针之间的中间索引值 middle，然后我们会遇到以下三种情况：
1. middle > right ：代表最小值一定在 middle 右侧，所以 left 移到 middle + 1的位置。
2. middle< right ：代表最小值一定在 middle左侧或者就是 middle，所以 right移到 middle 的位置。
3. middle 既不大于 left 指针的值，也不小于 right 指针的值，代表着 middle 可能等于 left 指针的值，或者 right 指针的值，我们这时候只能让 right 指针递减，来一个一个找最小值了。

## 3. 🍭复杂度与代码
时间复杂度：平均时间复杂度为 O(log n)
空间复杂度：平均时间复杂度为 O(1)

```
function minNumberInRotateArray(rotateArray) {
  let left = 0,
      right = rotateArray.length - 1;
  while(left < right){
    // Math.floor 等价于 ~~ 双取反去掉小数部分
    let middle = left + Math.floor((right - left) / 2);
    if(rotateArray[middle] > rotateArray[right]) left = middle + 1;
    else if(rotateArray[middle] < rotateArray[right]) right = middle;
    else right--;
  }
  return rotateArray[left];
}
```

# 7. 斐波那契数列
## 1. 🎨题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。n≤39

## 2. 🧠解题思路
**动态规划**
* 原理： 以斐波那契数列性质 f(n + 1) = f(n) + f(n - 1) 为转移方程。
* 从计算效率、空间复杂度上看，动态规划是本题的最佳解法。

**动态规划解析**：
* 状态定义： 设 dp 为一维数组，其中 dp[i] 的值代表 斐波那契数列第 i 个数字 。
* 转移方程： dp[i + 1] = dp[i] + dp[i - 1]，即对应数列定义 f(n + 1) = f(n) + f(n - 1) ；
* 初始状态： dp[0] = 0, dp[1] = 1 ，即初始化前两个数字；
* 返回值： dp[n] ，即斐波那契数列的第 n 个数字。

**空间复杂度优化**：
>若新建长度为 nn 的 dpdp 列表，则空间复杂度为 O(N)。

* 由于 dp 列表第 i 项只与第 i-1 和第 i-2 项有关，因此只需要初始化三个整形变量 sum, a, b ，利用辅助变量 sum 使 a, b 两数字交替前进即可 （具体实现见代码） 。
* 节省了 dp 列表空间，因此空间复杂度降至 O(1) 。


## 3. 🍭复杂度与代码
**时间复杂度** O(N) ： 计算 f(n) 需循环 n 次，每轮循环内计算操作使用 O(1) 。
**空间复杂度** O(1)： 几个标志变量使用常数大小的额外空间。
`动态规划`
```
每一次计算结果都能得到利用，易于理解，只保存前两个计算结果，性能最优
function Fibonacci(n)
{
  let a = 0, b = 1;
  let sum = 0;
  for(let i = 0; i < n; i++){
      sum = a + b;
      a = b;
      b = sum;
  }
    return a;
}
```
`备忘录算法`
```
function Fibonacci(n)
{
    const cache = {
        0: 0,
        1: 1
    };
    return _Fibonacci(n);
    
    function _Fibonacci(n){
        if(cache[n] !== undefined){
            return cache[n];
        }
        cache[n] = _Fibonacci(n-1) + _Fibonacci(n-2);
        return cache[n]
    }
}
```

# 8. 跳台阶
## 1. 🎨题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

## 2. 🧠解题思路
>此类求 多少种可能性 的题目一般都有**递推性质** ，即 f(n) 和 f(n-1)…f(1) 之间是有联系的。

* 设跳上 n 级台阶有 f(n) 种跳法。在所有跳法中，青蛙的最后一步只有两种情况： 跳上 1 级或 2 级台阶。
     1. 当为 1 级台阶： 剩 n-1 个台阶，此情况共有 f(n-1) 种跳法；
     2. 当为 2 级台阶： 剩 n-2 个台阶，此情况共有 f(n-2) 种跳法。

* f(n) 为以上两种情况之和，即 f(n)=f(n-1)+f(n-2) ，以上递推性质为斐波那契数列。本题可转化为 **求斐波那契数列第 n 项的值** ，与 斐波那契数列 等价，唯一的不同在于起始数字不同。
     - 青蛙跳台阶问题： f(0)=1 , f(1)=1 , f(2)=2 ；
     - 斐波那契数列问题： f(0)=0 , f(1)=1 , f(2)=1 。
![](https://ttarea.com/post-images/1621384519106.png)

## 3. 🍭复杂度与代码
**时间复杂度** O(N) ： 计算 f(n) 需循环 n 次，每轮循环内计算操作使用 O(1) 。
**空间复杂度** O(1)： 几个标志变量使用常数大小的额外空间。
```
var numWays = function(n) {
    let a = 1, b = 1;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = a + b;
        a = b;
        b = sum;
    }
    return a;
};
```

# 9. 跳台阶扩展问题
## 1. 🎨题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

## 2. 🧠解题思路
假设跳 n 级台阶的跳法数量是 f(n)个。

那么根据题意，青蛙可能从 n-1 级直接跳上来，也可能从 n-2 级直接跳上来，依次类推：f(n) = f(n - 1) + f(n - 2) + ... + f(1)
同理：f(n - 1) = f(n - 2) + f(n - 3) + ... + f(1)
所以，将公式 1 中的f(n - 2) + f(n - 3) + ... + f(1)替换为f(n - 1)。公式 1 变为：f(n) = f(n - 1) + f(n - 1) = f(n - 1) * 2 （公式 3）
同理：f(n - 1) = f(n - 2) + f(n - 2) = f(n - 2) * 2（公式 4）

结合公式 3 和公式 4: f(n) = f(n - 2) * 2 * 2。因此可以推出：f(n) = 2^(n - 1)

## 3. 🍭复杂度与代码
```
function jumpFloorII(number)
{
    return Math.pow(2,number - 1)
}
```

# 10. 矩形覆盖
## 1. 🎨题目描述
我们可以用2\*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2\*1的小矩形无重叠地覆盖一个2\*n的大矩形，从同一个方向看总共有多少种不同的方法？

## 2. 🧠解题思路
**迭代**
>涂掉最后一级矩形的时候，是用什么方式完成的？

* n = 1 的时候
     - 只能横着覆盖，一种
* n = 2 的时候
     - 可以横着和竖着覆盖，两种
* n = 3 的时候
     - 第三级横着覆盖，用了一级，剩下 n = 2，有两种覆盖方法
     - 第三季竖着覆盖，用了两级，剩下 n = 1，有一种覆盖方法
     - 总共有 3 种
* n = 4 的时候
     - 第 4 级横着覆盖，用了一级，剩下 n = 3，有三种覆盖方法
     - 第 4 级竖着覆盖，用了两级，剩下 n = 2，有两种覆盖方法
     - 总共有 5 种方法
* n = n 的时候
     - 第 n 级横着覆盖，用了一级，剩下 n = n - 1，所以关注第 n - 1 种有几种覆盖方法
     - 第 n 级竖着覆盖，用了两级，剩下 n = n - 2，所以关注第 n - 2 种有几种覆盖方法
     - 总和为两种情况的总和

从 n = 3 和 n = 4 的示意图如下：
![](https://ttarea.com/post-images/1621386677240.png)
![](https://ttarea.com/post-images/1621386681434.png)

## 3. 🍭复杂度与代码
**时间复杂度**：O（n）
**空间复杂度**：O（1）
```
function rectCover(number)
{
 if(number<=2)
     return number
  let a = 1
  let b = 2
  let sum = 0
  for(let i=3;i<=number;i++){
      sum = a+b;
      a = b;
      b = sum
  }
    return sum;
}
```

# 11. 二进制中1的个数
## 1. 🎨题目描述
输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。

## 2. 🧠解题思路
**巧用 n&(n−1)**
* (n−1) 解析： 二进制数字 n 最右边的 1 变成 0 ，此 1 右边的 0 都变成 1 。
* n&(n−1) 解析： 二进制数字 n **最右边的 1 变成 0** ，其余不变。
![](https://ttarea.com/post-images/1621390431142.png)

**算法流程**：
1. 初始化数量统计变量 res 。
2. 循环消去最右边的 1 ：当 n = 0 时跳出。
     1. **res += 1** ： 统计变量加 1 ；
     2. **n &= n - 1** ： 消去数字 n 最右边的 1 。
返回统计数量 res 。

## 3. 🍭复杂度与代码
* **时间复杂度** O(M) ： n&(n−1) 操作仅有减法和与运算，占用 O(1) ；设 M 为二进制数字 n 中 1 的个数，则需循环 M 次（每轮消去一个 1 ），占用 O(M) 。
* **空间复杂度** O(1) ： 变量 res 使用常数大小额外空间。
```
var hammingWeight = function(n) {
    let count = 0;
    while(n){
        n = n & (n - 1);
        count++;
    }
    return count;
};
```

# 12. 数值的整数次方
## 1. 🎨题目描述
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。不得使用库函数，同时不需要考虑大数问题。

## 2. 🧠解题思路
快速幂解析（二分法角度）：
>快速幂实际上是二分思想的一种应用。
![](https://ttarea.com/post-images/1621392122524.png)
![](https://ttarea.com/post-images/1621392145517.png)
**转化为位运算**：
* 向下整除 n // 2 等价于 右移一位 n >> 1 ；
* 取余数 n % 2 等价于 判断二进制最右一位值 n&1 ；
![](https://ttarea.com/post-images/1621392947278.png)

## 3. 🍭复杂度与代码
**时间复杂度** O(log2n)​ ： 二分的时间复杂度为对数级别。
**空间复杂度** O(logn) ： 采用递归结构。
```
var myPow = function(x, n) {
  if(x === 0) return 0;
  let res = 1;
  if(n < 0){
    x = 1 / x;
    n = -n;
  }
  while(n > 0){
    // 等价于n%2取余数 余1为奇数
    if(n & 1) res *= x;
    x *= x;
    n = n >>> 1;
  }
  return res;
};
```
[js位运算与超时](https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/solution/jsjie-ti-yu-dao-de-keng-he-ji-by-wangfei-cc6w/)


# 13. 调整数组顺序使奇数位于偶数前面
## 1. 🎨题目描述
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

## 2. 🧠解题思路
### 解法 1:开辟新空间
此过程需要循环 2 次，时间复杂度 O(N), 空间复杂度 O(N)。过程如下：
* 第一次循环依次找到偶数和奇数，并且将其分别存放到新开辟的空间中
* 第二次循环将存放偶数和奇数的空间“连接”在一起

### 解法 2: 双指针交换
可以利用“双指针”，分别是指向数组头部的指针 i，与指向数组尾部的指针 j。过程如下：
* i 向右移动，直到遇到偶数；j 向左移动，直到遇到奇数
* 检查 i 是否小于 j，若小于，交换 i 和 j 的元素，回到上一步骤继续移动；否则结束循环
时间复杂度是 O(N),空间复杂度是 O(1)。代码如下：

## 3. 🍭复杂度与代码
`开辟新空间`
```
function reOrderArray( array ) {
  const ji = [];      // 奇数数组
  const ou = [];      // 奇数数组
  array.forEach((item) => {
    item % 2 ? ji.push(item) : ou.push(item);
  });
  return ji.concat(ou);
}
```
`双指针交换`
```
var exchange = function(nums) {
  const length = nums.length;
  if(!length) return [];
  let i = 0,
      j = length - 1;
  while(i < j){
    while(i < length && nums[i] % 2) i++;
    while(j >= 0 && nums[j] % 2 === 0) j--;

    if(i < j){
      [nums[i],nums[j]] = [nums[j],nums[i]];
      i++;
      j--;
    }
  }
  return nums;
};
```

# 14.  链表中倒数第k个结点
## 1. 🎨题目描述
输入一个链表，输出该链表中倒数第k个结点。
如果该链表长度小于k，请返回空。

## 2. 🧠解题思路
基本思路：双指针/快慢指针
* 当快指针 fast 走了k步的时候慢指针slow 开始走
* 当快指针 fast 走出的时候（即超出边界）此时的 slow 位置即为链表中倒数第k个节点 

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为链表长度；总体看， former 走了 N 步， latter 走了(N−k) 步。
**空间复杂度 O(1)** ： 双指针 former , latter 使用常数大小的额外空间。
```
function FindKthToTail( head ,  k ) {
  let fast = head, slow = head;
  while(k && fast){
      fast = fast.next;
      k--;
  }
  if(k) return null;
  while(fast){
      fast = fast.next;
      slow = slow.next;
  }
  return slow;
}
```

# 15. 反转链表 
## 1. 🎨题目描述
输入一个链表，反转链表后，输出新链表的表头。

## 2. 🧠解题思路
单链表只能依次通过 next 访问 不能通过索引访问 
链表的交换需要扩展一个指针 即next
cur 当前项
prev 上一项
cur.next 当前指针指向
![](https://ttarea.com/post-images/1621771696118.png)

## 3. 🍭复杂度与代码
**时间复杂度**：O(n)，其中 n 是链表的长度。需要遍历链表一次。
**空间复杂度**：O(1)。
```
function ReverseList(head)
{
   let [p, c] = [null, head]
   while (c) [c.next, p, c] = [p, c, c.next]
   return p
}
```


# 16.  合并两个排序的链表
## 1. 🎨题目描述
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

## 2. 🧠解题思路
* 根据题目描述， 链表 l1 , l2 是**递增**的，因此容易想到使用双指针l1和l2 遍历两链表，根据l1.val和l2.val的大小关系确定节点添加顺序，两节点指针交替前进，直至遍历完毕。
* **引入伪头节点**： 由于初始状态合并链表中无节点，因此循环第一轮时无法将节点添加到合并链表中。解决方案：初始化一个辅助节点 dum 作为合并链表的伪头节点，将各节点添加至 dum 之后。
![](https://ttarea.com/post-images/1622540001340.png)
![](https://ttarea.com/post-images/1622540086651.png)
## 3. 🍭复杂度与代码
**时间复杂度 O(M+N)** ： M, N分别为链表 l1 , l2 的长度，合并操作需遍历两链表。
**空间复杂度 O(1) **： 节点引用 dum , cur 使用常数大小的额外空间。
```
var mergeTwoLists = function(l1, l2) {
  let dum = new ListNode(-1);
  let cur = dum;
  while(l1 && l2){
    if(l1.val < l2.val){
      dum.next = l1;
      l1 = l1.next;
    }else{
      dum.next = l2;
      l2 = l2.next;
    }
    dum = dum.next;
  }
  if(l1) dum.next = l1;
  if(l2) dum.next = l2;
  return cur.next;
};
```


# 17. 树的子结构
## 1. 🎨题目描述
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

## 2. 🧠解题思路
若树 B 是树 A 的子结构，则子结构的根节点可能为树 A 的任意一个节点。因此，判断树 B 是否是树 A 的子结构，需设计两个函数：
1. isSubStructure 的职能：判断 B 是否是 A 的子结构。是，返回 true；否则，尝试 A 的左右子树
2. isSubTree 的职能：封装“判断 B 是否是 A 的子结构”的具体逻辑。
![](https://ttarea.com/post-images/1624626358399.png)


## 3. 🍭复杂度与代码
**时间复杂度 O(MN)** ： 其中 M,N 分别为树 A 和 树 B 的节点数量；先序遍历树 A 占用 O(M)，每次调用 recur(A, B) 判断占用 O(N) 。
**空间复杂度 O(M)**： 当树 A 和树 B 都退化为链表时，递归调用深度最大。当 M≤N 时，遍历树 A 与递归判断的总递归深度为 M ；当 M>N 时，最差情况为遍历至树 A 叶子节点，此时总递归深度为 M。
```
// 判断 B 是否是 A 的子结构。是，返回 true；否则，尝试 A 的左右子树
function HasSubtree(pRoot1, pRoot2)
{
   if(!pRoot1 || !pRoot2) return false;    // 题目约定：约定空树不是任意一个树的子结构
   return (
     isSubTree(pRoot1, pRoot2) ||          //比较当前节点值
     HasSubtree(pRoot1.left, pRoot2) ||    //比较左右节点值
     HasSubtree(pRoot1.right, pRoot2)
   );
}

// 封装“判断 B 是否是 A 的子结构”的具体逻辑。
function isSubTree(pRoot1, pRoot2){
   if (!pRoot2) return true;          // B树遍历完了，说明B是A的子结构
   if (!pRoot1) return false;         // A遍历完了，但是B还没有遍历完，那么B肯定不是A的子结构
   if (pRoot1.val !== pRoot2.val) return false;
   return isSubTree(pRoot1.left, pRoot2.left) && isSubTree(pRoot1.right, pRoot2.right);
}
```

# 18. 二叉树的镜像
## 1. 🎨题目描述
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

## 2. 🧠解题思路
根据二叉树镜像的定义，考虑递归遍历（dfs）二叉树，交换每个节点的左 / 右子节点，即可生成二叉树的镜像。

**递归解析：**
1. 终止条件： 当节点 root 为空时（即越过叶节点），则返回 null ；
2. 递推工作：
        * 初始化节点 tmp ，用于暂存 root 的左子节点；
        * 开启递归 右子节点 mirrorTree(root.right) ，并将返回值作为 root 的左子节点 。
        * 开启递归 mirrorTree(tmp) ，并将返回值作为 root 的 右子节点 。
3. 返回值：返回当前节点 root；

## 3. 🍭复杂度与代码
**时间复杂度 O(N)**： 其中 N 为二叉树的节点数量，建立二叉树镜像需要遍历树的所有节点，占用 O(N) 时间。
**空间复杂度 O(N)** ： 最差情况下（当二叉树退化为链表），递归时系统需使用 O(N) 大小的栈空间。
```
function Mirror( root ) {
  if(!root) return null;
  Mirror(root.left);
  Mirror(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
}
```

# 19. 顺时针打印矩阵
## 1. 🎨题目描述
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

## 2. 🧠解题思路
**遍历到底**
![](https://ttarea.com/post-images/1624785685872.png)
* 循环的条件是 top <= bottom && left <= right 。
* 每遍历完一条边，下一条边遍历的起点被“挤占”，所以要更新相应的边界。
* 因为要在循环过程中更新边界，所以可能出现：循环的条件在中途不再满足，即 top > bottom || left > right ，其中一对边界彼此交错了。
* 这代表此时所有项都遍历完了，如果不马上 break，就会重复遍历，造成元素重复地进入结果数组。

**解决办法**
* 每遍历完一条边，更新完相应的边界后，都加一句if (top > bottom || left > right) break
* 但其实发现，遍历结束要么发生在遍历完“上边”，要么发生在遍历完“右边”，只需在这两步操作之后加 if (top > bottom || left > right) break 即可，不用每一条后面都加。


## 3. 🍭复杂度与代码
**时间复杂度 O(mn)**，m、n 分别是行数和列数。
**空间复杂度 O(mn)**。
```
function printMatrix(matrix)
{
  if(matrix.length === 0) return [];
  const res = [];
  let top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;  //初始化变量
  while(top <= bottom && left <= right){          //当上不超过下 左不超过右时
    for(let i = left; i <= right; i++) res.push(matrix[top][i]);        //遍历上边一行
    top++;
    for(let i = top; i <= bottom; i++) res.push(matrix[i][right]);      //遍历右边一行
    right--;
    
    if(top > bottom || left > right) break;       //超过边界退出

    for(let i = right; i >= left; i--) res.push(matrix[bottom][i]);     //遍历下边一行
    bottom--;
    for(let i = bottom; i >= top; i--) res.push(matrix[i][left]);       //遍历左边一行
    left++;
  } 
  return res;
}
```

# 20. 包含min函数的栈
## 1. 🎨题目描述
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数，并且调用 min函数、push函数 及 pop函数 的时间复杂度都是 O(1)
push(value):将value压入栈中
pop():弹出栈顶元素
top():获取栈顶元素
min():获取栈中最小元素

## 2. 🧠解题思路
>普通栈的 push() 和 pop() 函数的复杂度为 O(1) ；而获取栈最小值 min() 函数需要遍历整个栈，复杂度为 O(N) 。

**本题难点**： 将 min() 函数复杂度降为 O(1) ，可通过建立辅助栈实现；
* 数据栈 A ： 栈 A 用于存储所有元素，保证入栈 push() 函数、出栈 pop() 函数、获取栈顶 top() 函数的正常逻辑。
* 辅助栈 B ： 栈 B 中存储栈 A 中所有 非严格降序 的元素，则栈 A 中的最小元素始终对应栈 B 的栈顶元素，即 min() 函数只需返回栈 B 的栈顶元素即可。

**因此**，只需设法维护好 栈 B 的元素，使其保持非严格降序，即可实现 min() 函数的 O(1) 复杂度。
![](https://ttarea.com/post-images/1625038523972.png)
## 3. 🍭复杂度与代码
**时间复杂度 O(1)** ： push(), pop(), top(), min() 四个函数的时间复杂度均为常数级别。
**空间复杂度 O(N)**： 当共有 N 个待入栈元素时，辅助栈 B 最差情况下存储 N 个元素，使用 O(N) 额外空间。
```
const data_Stack = [];
const min_Stack = [];

function push(x){
  data_Stack.push(x);
  if(!min_Stack.length || x <= min_Stack[min_Stack.length - 1]) min_Stack.push(x);
}

function pop(){
  if(min_Stack[min_Stack.length - 1] === data_Stack[data_Stack.length - 1]) min_Stack.pop();
  data_Stack.pop();
}

function top(){
  return data_Stack[data_Stack.length - 1];
}

function min(){
  return min_Stack[min_Stack.length - 1];
}
```


# 21. 栈的压入、弹出序列
## 1. 🎨题目描述
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。

## 2. 🧠解题思路
解题思路构造一个辅助栈 stack 模拟出栈行为
1. 入栈操作： 按照压栈序列的顺序执行
2. 出栈操作： 每次入栈后，循环判断 “栈顶元素 = 弹出序列的当前元素” 是否成立，将符合弹出序列顺序的栈顶元素全部弹出 

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为列表 pushed 的长度；每个元素最多入栈与出栈一次，即最多共 2N 次出入栈操作。
**空间复杂度 O(N)** ： 辅助栈 stack 最多同时存储 N 个元素。
```
var validateStackSequences = function(pushed, popped) {
  const stack = [];                 //辅助栈
  let index = 0,                    //指向popped当前的下标
      len = pushed.length;
  for (let i = 0; i < len; i++) {
    stack.push(pushed[i]);          //把pushed的元素一个一个入栈
    //把入栈的当前元素和pushed当前指向的元素进行对比 相等话就把辅助栈出栈 pushed下标往右移动
    while(stack.length && stack[stack.length - 1] === popped[index]){
      stack.pop();
      index++;
    }                              
  }
  return !stack.length;             //如果stack为空，说明符合题目
}
```


# 22. 从上往下打印二叉树
## 1. 🎨题目描述
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

## 2. 🧠解题思路
层序遍历需要使用一个队列来存储有用的节点。整体的思路如下：
1. 将 root 放入队列
2. 取出队首元素，将 val 放入返回的数组中
3. 检查队首元素的子节点，若不为空，则将子节点放入队列
4. 检查队列是否为空，为空，结束并返回数组；不为空，回到第二步

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为二叉树的节点数量，即 BFS 需循环 N 次。
**空间复杂度 O(N)** ： 最差情况下，即当树为平衡二叉树时，最多有 N/2 个树节点同时在 queue 中，使用 O(N) 大小的额外空间。

```
function PrintFromTopToBottom(root)
{
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
    const first = queue.shift();
    res.push(first.val);
    first.left && queue.push(first.left);
    first.right && queue.push(first.right);
  }
  return res;
} 
```

# 23. 二叉搜索树的后序遍历序列
## 1. 🎨题目描述
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。（ps：我们约定空树不是二叉搜索树）

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1625453305346.png)
在题目没有重复数字的前提下，二叉搜索树的左子树均小于根节点，右子树均大于根节点。
判断二叉搜索树的后续遍历是否合法，只需判断右子树是否均大于根节点，左子树是否均小于根节点。
显然对于每个节点的操作都是一样的(问题拆解成子问题))，所以使用递归来实现。

## 3. 🍭复杂度与代码
**时间复杂度 O(N^2)**： 每次调用 递归函数 减去一个根节点，因此递归占用 O(N) ；最差情况下（即当树退化为链表），每轮递归都需遍历树所有节点，占用 O(N) 。
**空间复杂度 O(N)** ： 最差情况下（即当树退化为链表），递归深度将达到 N 。
```
function VerifySquenceOfBST(postorder){
  if(!postorder || postorder.length === 0) return false;
    else return _VerifySquenceOfBST(postorder);
}
function _VerifySquenceOfBST(postorder){
  let len = postorder.length;
  if(len < 2) return true;          // 若为叶子节点，则返回 true
  let root = postorder[len - 1];    // 后序遍历的最后一个元素为根节点
  for(var i = 0; i < len - 1; i++){
    if(postorder[i] > root) break;  //postorder[0,i]为左子树   postorder[i,len-1]为右子树 
  }
  // 判断右子树中的元素是否都大于 root，此处用到 every (数组 API，数组的每个元素都返回 true 则整体返回 true)
  let result = postorder.slice(i, len - 1).every(item => item > root);
  if(result){
    // 对左右子树进行递归调用,左右子树通过 i 进行分割
    return _VerifySquenceOfBST(postorder.slice(0, i)) && _VerifySquenceOfBST(postorder.slice(i, len - 1));
  }else{
    return false;
  }
 }
```

# 24. 二叉树中和为某一值的路径
## 1. 🎨题目描述
输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

## 2. 🧠解题思路
**先序遍历**： 按照 “根、左、右” 的顺序，遍历树的所有节点。
**路径记录**： 在先序遍历中，记录从根节点到当前节点的路径。当路径为 ① 根节点到叶节点形成的路径 且 ② 各节点值的和等于目标值 sum 时，将此路径加入结果列表。

**递推参数**： 当前节点 root ，当前目标值 sum - root.val 。
**终止条件**： 若节点 root 为空，则直接返回。
**递推工作**：
1. 路径更新： 将当前节点值 root.val 加入路径 tmp ；
2. 目标值更新： sum = sum - root.val（即目标值 从 sum 减至 0 ）；
3. 路径记录： 当 ① root 为叶节点 且 ② 路径和等于目标值 ，则将此路径 tmp[] 加入 res 。
4. 先序遍历： 递归左 / 右子节点。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为二叉树的节点数，先序遍历需要遍历所有节点。
**空间复杂度 O(N)** ： 最差情况下，即树退化为链表时，tmp 存储所有树节点，使用 O(N) 额外空间。
```
var pathSum = function(root, sum) {
  if(!root) return [];
  const res = [];
  const dfs = (root, sum, tmp) => {
    if(root.val === sum && !root.left && !root.right) res.push(tmp)  // 如果满足节点值等于目标值，且该节点为叶子节点时，添加结果
    tmp.push(root.val);
    if(root.left) dfs(root.left, sum - root.val, [...tmp]);
    if(root.right) dfs(root.right, sum - root.val, [...tmp]);
  }
  dfs(root, sum, []);
  return res;
};
```


# 25. 复杂链表的复制
## 1. 🎨题目描述
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）。 下图是一个含有5个结点的复杂链表。图中实线箭头表示next指针，虚线箭头表示random指针。为简单起见，指向null的指针没有画出。
![](https://ttarea.com/post-images/1625465310051.png)

## 2. 🧠解题思路
利用哈希表的查询特点，考虑构建 原链表节点 和 新链表对应节点 的键值对映射关系，再遍历构建新链表各节点的 next 和 random 引用指向即可。

**算法流程：**
1. 若头节点 head 为空节点，直接返回 null ；
2. **初始化**： 哈希表 dic ， 节点 cur 指向头节点；
3. **复制链表**：
        * 建立新节点，并向 dic 添加键值对 (原 cur 节点, 新 cur 节点） ；
        * cur 遍历至原链表下一节点；
4. **构建新链表的引用指向**：
        * 构建新节点的 next 和 random 引用指向；
        * cur 遍历至原链表下一节点；
5. **返回值**： 新链表的头节点 dic[cur] ；

## 3. 🍭复杂度与代码
**时间复杂度 O(N)**： 两轮遍历链表，使用 O(N) 时间。
**空间复杂度 O(N)** ： 哈希表 dic 使用线性大小的额外空间。
```
function Clone(head)
{
 if(!head) return null;
  let m = new Map();
  let node = head;
  while(node){                         // 复制节点
    m.set(node, new RandomListNode(node.label));   // 构建源节点，新节点的键值对
    node = node.next;
  }
  node = head;
  while(node){
    m.get(node).next = node.next ? m.get(node.next) : null;
    m.get(node).random = node.random ? m.get(node.random) : null;
    node = node.next;
  }
  return m.get(head);
}
```

# 26. 二叉搜索树与双向链表
## 1. 🎨题目描述
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。如下图所示
![](https://ttarea.com/post-images/1625468801097.png)

## 2. 🧠解题思路
将 二叉搜索树 转换成一个 “排序的循环双向链表” ，其中包含两个要素：
1. **排序链表**： 节点应从小到大排序，因此应使用 **中序遍历** “从小到大”访问树的节点。
2. **双向链表**： 在构建相邻节点的引用关系时，设前驱节点 pre 和当前节点 cur ，不仅应构建 pre.right = cur ，也应构建 cur.left = pre 。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)**： N 为二叉树的节点数，中序遍历需要访问所有节点。
**空间复杂度 O(N)** ： 最差情况下，即树退化为链表时，递归深度达到 N，系统使用 O(N) 栈空间。
```
function Convert(root)
{
  let pre = null;
  let head = null;
  dfs(root);
  function dfs(cur) {
    if(!cur) return null;
    dfs(cur.left);             // 中序遍历 左根右
    if(!pre) head = cur;       // 初始化head
    else pre.right = cur;      // 如果存在pre 向右添加 下一个节点
    cur.left = pre;            // 双向链表 向左添加前一个节点指针
    pre = cur;                 // pre next 向下继续 递归
    dfs(cur.right);
  };
  return head;
}
```

# 27. 字符串的排列
## 1. 🎨题目描述
输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

## 2. 🧠解题思路
首先给定一个字符串，这个字符串里每一个字符是构成排列的元素之一，我们的回溯代码里，选择和回退就确定了是这每个字符。
给定的字符串有几个字符，那么我们的结束条件就应该是当前选择的字符串的字符数量等于给定的字符串的数量。
由于要求不能有重复元素，我们还需要过滤剪枝掉可能会重复的选择，这里由于给定的字符串里面可能也会包含重复的字符，那么我们用字符串来是否出现过这个字符来判断显然是不合理的，参考我们上一道题单词搜索，我们可以采用一个bool数组来记录是否访问过。
![](https://ttarea.com/post-images/1625538744355.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(N!N)** ： N 为字符串 s 的长度；时间复杂度和字符串排列的方案数成线性关系，方案数为 N×(N−1)×(N−2)…×2×1 ，即复杂度为 O(N!) ；字符串拼接操作 join() 使用 O(N) ；因此总体时间复杂度为 O(N!N) 。
**空间复杂度 O(N^2)** ： 全排列的递归深度为 N ，系统累计使用栈空间大小为 O(N) ；递归中辅助 Set 累计存储的字符数量最多为 N+(N−1)+...+2+1=(N+1)N/2 ，即占用 O(N^2) 的额外空间。
```
function Permutation(str)
{
  const res = new Set();
  const visit = [];
  function dfs(path){
    if (path.length === str.length) return res.add(path);     //结束条件，如果当前选择字符串和题目给定字符串的长度一致则结束。
    for(let i = 0; i < str.length; i++){
      if(visit[i]) continue;       //过滤掉已经选择的。
      visit[i] = true;             //做出选择
      dfs(path + str[i]);          // 进入下一层， 需要注意path这里也是做了选择和回退选择，因为是直接path + chars[i]，等递归结束之后path还是path，默认也就做了回退，比较取巧。
      visit[i] = false;            //回退选择
    }
  }
  dfs('');
  return [...res]
}
```

# 28. 数组中出现次数超过一半的数字
## 1. 🎨题目描述
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。你可以假设数组是非空的，并且给定的数组总是存在多数元素。

## 2. 🧠解题思路
想象一下，假如数组是一个投票箱，数组元素是一张写了选举人编号的一张选票。
题目要求我们找出哪个数字，超过了数组的一半！
是否就可以想象为，哪个人成为了最终选举的胜利者呢？
那么，接下来我们要做的事情，就是找到票数最多的那个人的编号即可。

经过以上实例分析，我们可以得出 3 个要点：
1. 不同候选人的选票之间，可以一一抵消。
2. 若当前胜利者存在多张选票时，不同的候选人的票，只能抵消一张当前胜利者的票。
3. 若当前双方的选票被抵消为零，下一次抽出的候选人，将作为暂时的胜利者领先。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为数组 nums 长度。
**空间复杂度 O(1)** ： count 变量使用常数大小的额外空间。
```
function MoreThanHalfNum_Solution(nums)
{
  let ans = 0, count = 0;
  for(let i = 0; i < nums.length; i++){
    if(!count){
      ans = nums[i];
      count++;
    }else{
      count += nums[i] === ans ? 1 : -1;
    }
  }
  return ans;
}
```

# 28_番外.  回文链表 
## 1. 🎨题目描述
请判断一个链表是否为回文链表。

## 2. 🧠解题思路
快慢指针，起初都指向表头，快指针一次走两步，慢指针一次走一步，遍历结束时：
* 要么，slow 正好指向中间两个结点的后一个。
* 要么，slow 正好指向中间结点。

用 prev 保存 slow 的前一个结点，通过prev.next = null断成两个链表。

将后半段链表翻转，和前半段从头比对。空间复杂度降为O(1)。
![](https://ttarea.com/post-images/1625707829215.png)
**如何翻转单链表**
可以这么思考：一次迭代中，有哪些指针需要变动：
* 每个结点的 next 指针要变动。
* 指向表头的 slow 指针要变动。
* 需要有指向新链表表头的 head2 指针，它也要变。

![](https://ttarea.com/post-images/1625707850174.png)
## 3. 🍭复杂度与代码
**时间复杂度O(N)**  
**空间复杂度O(1)**
```
const isPalindrome = (head) => {
  if (head == null || head.next == null) {
    return true;
  }
  let fast = head;
  let slow = head;
  let prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;  // 断成两个链表
  // 翻转后半段
  let head2 = null;
  while (slow) {
    const tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  // 比对
  while (head && head2) {
    if (head.val != head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};
```


# 29. 最小的K个数
## 1. 🎨题目描述
给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。如果K>数组的长度，那么返回一个空的数组

## 2. 🧠解题思路
题目只要求返回最小的 k 个数，对这 k 个数的顺序并没有要求。因此，只需要将数组划分为 **最小的 k 个数** 和 **其他数字** 两部分即可，而快速排序的哨兵划分可完成此目标。

根据快速排序原理，如果某次哨兵划分后 **基准数正好是第 k+1k+1 小的数字** ，那么此时基准数左边的所有数字便是题目所求的 **最小的 k 个数** 。

根据此思路，考虑在每次哨兵划分后，判断基准数在数组中的索引是否等于 kk ，若 truetrue 则直接返回此时数组的前 kk 个数字即可。
![](https://ttarea.com/post-images/1625713224386.png)
![](https://ttarea.com/post-images/1625713229853.png)
1. **哨兵划分：**
* 划分完毕后，基准数为 arr[i] ，左 / 右子数组区间分别为 [l, i - 1] , [i + 1, r]；

2. **递归或返回：**
* 若 k < i ，代表第 k + 1 小的数字在 **左子数组** 中，则递归左子数组；
* 若 k > i ，代表第 k + 1 小的数字在 **右子数组** 中，则递归右子数组；
* 若 k = i ，代表此时 arr[k] 即为第 k + 1 小的数字，则直接返回数组前 k 个数字即可；
![](https://ttarea.com/post-images/1625713286563.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为数组元素数量；对于长度为 N 的数组执行哨兵划分操作的时间复杂度为 O(N) 
**空间复杂度 O(logN)** ： 划分函数的平均递归深度为 O(logN) 。
```
function GetLeastNumbers_Solution(input, k){
    if(input.length == 0 || k > input.length) return [];
    quickSort(input, 0, input.length - 1);
    return input.slice(0, k);
}
function quickSort(input, left, right){
    if(left >= right) return;
    let i = left, j = right;
    while(i < j){
        while(i < j && input[j] >= input[left]) j--;
        while(i < j && input[i] <= input[left]) i++;
        [input[i], input[j]] = [input[j], input[i]];          // 根据基准交换大小，左小右大
    }
    [input[left], input[i]] = [input[i], input[left]];        //交换基准
    quickSort(input, left, i-1);
    quickSort(input, i+1, right);
}
```


# 30. 连续子数组的最大和
## 1. 🎨题目描述
输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 O(n).

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1625727249997.png)
![](https://ttarea.com/post-images/1625727254778.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 线性遍历数组 nums 即可获得结果，使用 O(N) 时间。
**空间复杂度 O(1)** ： 使用常数大小的额外空间。
```
var maxSubArray = function(nums) {
  let res = nums[0];
  for(let i = 1; i < nums.length; i++){
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    res = Math.max(res, nums[i]);
  } 
  return res;
};
```

# 31.  整数中1出现的次数
## 1. 🎨题目描述
输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626080722601.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(logn) **： 循环内的计算操作使用 O(1) 时间；循环次数为数字 n 的位数，即 log10^n ，因此循环使用 O(logn) 时间。
**空间复杂度 O(1) **： 几个变量使用常数大小的额外空间。
```
var countDigitOne = function(n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 10) {
      let divide = i * 10;
      let p = Math.floor(n / divide), k = n % divide, rest = 0;
      count += p * i;
      rest = (k > (2 * i - 1)) ? i : ((k < i) ? 0 : k - i + 1);
      count += rest;
  }
  return count;
};
```

# 32. 把数组排成最小的数
## 1. 🎨题目描述
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

## 2. 🧠解题思路
此题求拼接起来的最小数字，本质上是一个排序问题。设数组 nums 中任意两数字的字符串为 x 和 y ，则规定 **排序判断规则** 为：
* 若拼接字符串 x + y > y + x ，则 x 大于”y ；
* 反之，若 x + y < y + x ，则 x“小于”y ；

![](https://ttarea.com/post-images/1626082655702.png)

## 3. 🍭复杂度与代码
**时间复杂度是O(NlogN)**
**空间复杂度是O(1)**
```
var minNumber = function(numbers) {
  numbers.sort((a, b) => {
      const s1 = a + "" + b;
      const s2 = b + "" + a;
      if (s1 < s2) return -1;   // 表示 'ab' < 'ba'，即 a < b ，a 在 b 前边
      if (s1 > s2) return 1;    // 表示 'ab' > 'ba'，即 a > b ，a 在 b 后边
      return 0;
  });
  return numbers.join("");
};
```

# 33. 丑数
## 1. 🎨题目描述
把只包含质因子2、3和5的数称作丑数（Ugly Number）。

## 2. 🧠解题思路
设置3个索引a, b, c，分别记录前几个数已经被乘2， 乘3， 乘5了，比如a表示前(a-1)个数都已经乘过一次2了，下次应该乘2的是第a个数；b表示前(b-1)个数都已经乘过一次3了，下次应该乘3的是第b个数；c表示前(c-1)个数都已经乘过一次5了，下次应该乘5的是第c个数；

对于某个状态下的丑数序列，我们知道此时第a个数还没有乘2(有没有乘3或者乘5不知道）， 第b个数还没有乘3(有没有乘2或者乘5不知道），第c个数还没有乘5(有没有乘2或者乘3不知道), 下一个丑数一定是从第a丑数乘2， 第b个数乘3， 第c个数乘5中获得，他们三者最小的那个就是下个丑数。

求得下个丑数后就得判断这个丑数是谁，是某个数通过乘2得到的，还是某个数乘3得到的，又或是说某个数通过乘5得到的。我们可以比较一下这个新的丑数等于究竟是等于第a个丑数乘2, 还是第b个数乘3， 还是第c个数乘5， 通过比较我们肯定可以知道这个新的丑数到底是哪个数通过乘哪个数得到的。假设这个新的丑数是通过第a个数乘2得到的，说明此时第a个数已经通过乘2得到了一个新的丑数，那下个通过乘2得到一个新的丑数的数应该是第(a+1)个数，此时我们可以说前 a 个数都已经乘过一次2了，下次应该乘2的是第 （a+1） 个数, 所以a++；如果新的丑数是通过第b个数乘3得到的, 说明此时第 b个数已经通过乘3得到了一个新的丑数，那下个需要通过乘3得到一个新的丑数的数应该是第(b+1)个数，此时我们可以说前 b 个数都已经乘过一次3了，下次应该乘3的是第 （b+1） 个数, 所以 b++；同理，如果这个这个新的丑数是通过第c个数乘5得到的, 那么c++;

但是注意，如果第a个数乘2后等于第b个数乘3，或者等于第c个数乘5， 说明这个新的丑数是有两种或者三种方式可以得到，这时应该给得到这个新丑数的组合对应的索引都加一，比如新丑数是第a个数乘2后和第b个数乘3得到的，那么 a 和 b都应该加一， 因为此时第a个数已经通过乘2得到了一个新的丑数，第b个数已经通过乘3得到了一个新的丑数, 只不过这两个数相等而已。所以我们给计数器加一的时候不能使用 if else else if， 而应该使用if, if, if, 这样才不会把应该加一的计数器漏掉

经过n次循环，就能得到第n 个丑数了。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)**： 其中 N=n ，动态规划需遍历计算 dp 列表。
**空间复杂度 O(N)** ： 长度为 N 的 dp 列表使用 O(N) 的额外空间。
```
function GetUglyNumber_Solution(n){
  if(n === 0) return 0;
  const dp = new Array(n);             // 使用dp数组来存储丑数序列
  dp[0] = 1;                           // dp[0]已知为1
  let pt2 = 0, pt3 = 0, pt5 = 0;       // 下个应该通过乘2来获得新丑数的数据
  for(let i = 1; i < n; i++){
    dp[i] = Math.min(dp[pt2] * 2, dp[pt3] * 3, dp[pt5] * 5);
    if(dp[i] === dp[pt2] * 2) pt2++;   // 第pt2个数已经通过乘2得到了一个新的丑数，那下个需要通过乘2得到一个新的丑数的数应该是第(pt2+1)个数
    if(dp[i] === dp[pt3] * 3) pt3++;
    if(dp[i] === dp[pt5] * 5) pt5++;
  }
  return dp[n - 1];
}
```



# 34. 第一个只出现一次的字符
## 1. 🎨题目描述
在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）

## 2. 🧠解题思路
遍历字符串，通过 indexOf 和 lastindexOf 获取字符第一次和最后一次出现的位置，如果不同则说明该字符在字符串中出现次数不唯一，如果相同则说明该字符只出现一次。

## 3. 🍭复杂度与代码
**时间复杂度 O(N^2) **： N 为字符串 s 的长度；需遍历 s 两轮，使用 O(N) ；indexOf 查找操作的复杂度为 O(N)；
**空间复杂度 O(1)** ： 由于题目指出 s 只包含小写字母，因此最多有 26 个不同字符，HashMap 存储需占用 O(26)=O(1) 的额外空间。
```
function FirstNotRepeatingChar(str){
  for(let i=0;i<str.length;i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        return i;
    }
  }
  return -1;
}
```

# 35. 数组中的逆序对
## 1. 🎨题目描述
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

## 2. 🧠解题思路
说明：理解这个算法需要对「归并排序」比较熟悉。掌握如果编写递归函数，每一次都一分为二拆分数组的子区间，然后在方法栈弹出的时候，一步一步合并两个有序数组，最后完成排序工作。

而计算逆序数就发生在排序的过程中，利用了「排序」以后数组的有序性。
* 利用「归并排序」计算逆序对，是非常经典的做法；
* **关键在于「合并两个有序数组」的步骤，利用数组的部分有序性**，一下子计算出一个数之前或者之后元素的逆序的个数；
* **前面「分」的时候什么都不做，「合」的过程中计算「逆序对」的个数**；
* 「排序」的工作是必要的，正是因为「排序」才能在下一轮利用顺序关系加快逆序数的计算，也能避免重复计算；
* 在代码实现上，只需要在「归并排序」代码的基础上，加上「逆序对」个数的计算，计算公式需要自己在草稿纸上推导。

思想是「分治算法」，所有的「逆序对」来源于 3 个部分：
* 左边区间的逆序对；
* 右边区间的逆序对；
* 横跨两个区间的逆序对。

![](https://ttarea.com/post-images/1626266797275.png)
## 3. 🍭复杂度与代码
时间复杂度：O(NlogN)，这里 N 是数组的长度。复杂度是归并排序的时间复杂度，直接看递归树的结点个数或者使用主定理分析，归并的回收每一步计算逆序对的个数是 O(1) 的；
空间复杂度：O(N)。
```
function InversePairs(nums) {
  let sum = 0;            // 定义变量存储逆序对的数量
  mergeSort(nums);        // 归并排序的返回结果赋值给sum
  return sum % 1000000007;
  // 归并排序函数(分)
  function mergeSort (nums) {
    if(nums.length < 2) return nums;                        // 一个元素的时候，我们返回这个数组，即递归的结束条件
    let mid = Math.floor(nums.length / 2);                  // 如果数组的长度不小于2，说明还没有分彻底 ，下面继续分
    let left = nums.slice(0, mid);                          // 左边的子数组
    let right = nums.slice(mid);                            // 右边的子数组
    return merge(mergeSort(left), mergeSort(right));    // 将拆分好的左右子数组投入到合并函数中
  }
  // 合并函数（用户将拆分好的子数组进行合并）
  function merge(left, right) {
    const res = [];                   // 定义一个存储合并排好顺序的总数组（包含左右子数组的）
    const leftLen = left.length;
    const rightLen = right.length;
    // 开始循环遍历，是以res的下标为基础进行遍历的(i是左子数组的下标，j是右子树组的下标，index是res的下标)
    for(let i = 0, j = 0, index = 0; index < leftLen + rightLen; index++) {
      if(i >= leftLen) res.push(right[j++]); // 如果i越界说明，左子数组已经遍历完，此时res直接添加右子数组的下标指向的元素即可
      else if(j >= rightLen) res.push(left[i++]); // 如果j越界，说明右子数组已经遍历完了，此时res直接添加左子数组下标指向的元素即可
      else if(left[i] <= right[j]) res.push(left[i++]);  // 如果左子数组下标指向的元素小于等于右子数组下标指向的元素，此时不存在逆序对，将左子数组对应的结果加到res数组即可
      else {
        res.push(right[j++]); // 如果左子数组下标指向的元素大于右子数组下标指向的元素，此时是存在逆序对的
        sum += leftLen - i;
      }
    }
    return res; 
  }
};
```


# 36. 两个链表的第一个公共结点
## 1. 🎨题目描述
输入两个无环的单链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）

## 2. 🧠解题思路
我们使用两个指针 node1，node2 分别指向两个链表 headA，headB 的头结点，然后同时分别逐结点遍历，当 node1 到达链表 headA 的末尾时，重新定位到链表 headB 的头结点；当 node2 到达链表 headB 的末尾时，重新定位到链表 headA 的头结点。

这样，当它们相遇时，所指向的结点就是第一个公共结点。

## 3. 🍭复杂度与代码
**时间复杂度**：O(M+N)。
**空间复杂度**：O(1)。
```
function FindFirstCommonNode(pHead1, pHead2)
{
    let h1 = pHead1;
    let h2 = pHead2;
    while(h1 !== h2){
      h1 = h1 === null ? pHead2 : h1.next;
      h2 = h2 === null ? pHead1 : h2.next;
    }
    return h1;
}
```

# 37. 数字在升序数组中出现的次数
## 1. 🎨题目描述
统计一个数字在升序数组中出现的次数。

## 2. 🧠解题思路
显然是利用二分查找。因为有序，所以目标值target如果有多个，肯定是连在一起。又已知我们可以在有序数组中查找任意一个值，因此我们可以先查找目标范围的下界和上界。
下界定义为：如果存在目标值，则指向第一个目标值，否则，如果不存在， 则指向大于目标值的第一个值。
上界定义为：不管目标值存在与否，都指向大于目标值的第一个值。
如下图所示：
![](https://ttarea.com/post-images/1626271708852.png)
![](https://ttarea.com/post-images/1626271712155.png)
最后的结果就是：right - left

## 3. 🍭复杂度与代码
**时间复杂度O(logN)**,
**空间复杂度 O(1)** 
```
function GetNumberOfK(data, k)
{
  if(!data.length) return 0;
  let left = 0, right = data.length - 1;
  while(left < right){
    let mid = Math.floor((left + right) / 2);
    if(data[mid] >= k) right = mid;
    else left = mid + 1;
  }
  while(data[right] === k) right++;
  return right - left;
}
```

# 38. 二叉树的深度
## 1. 🎨题目描述
输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

## 2. 🧠解题思路
树的后序遍历 / 深度优先搜索往往利用 **递归** 或 **栈** 实现，本文使用递归实现。
**关键点：** 此树的深度和其左（右）子树的深度之间的关系。显然，**此树的深度** 等于 **左子树的深度** 与** 右子树的深度** 中的 最大值 **+1** 。
![](https://ttarea.com/post-images/1626271942911.png)


## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为树的节点数量，计算树的深度需要遍历所有节点。
**空间复杂度 O(N)** ： 最差情况下（当树退化为链表时），递归深度可达到 N 。
```
function TreeDepth(pRoot){
  return pRoot === null ? 0 : Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right)) + 1
}
```

# 39. 平衡二叉树
## 1. 🎨题目描述
输入一棵二叉树，判断该二叉树是否是平衡二叉树。
在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
平衡二叉树（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

## 2. 🧠解题思路
思路是对二叉树做后序遍历，从底至顶返回子树深度，若判定某子树不是平衡树则 “剪枝” ，直接向上返回。

**算法流程**：
**recur(root) 函数**：
* 返回值：
     1. 当节点root 左 / 右子树的深度差 ≤1 ：则返回当前子树的深度，即节点 root 的左 / 右子树的深度最大值 +1 （ max(left, right) + 1 ）；
     2. 当节点root 左 / 右子树的深度差 > 2 ：则返回 -1，代表 **此子树不是平衡树** 。
* 终止条件：
     1. 当 root 为空：说明越过叶节点，因此返回高度 0 ；
     2. 当左（右）子树深度为 -1 ：代表此树的 **左（右）子树** 不是平衡树，因此`剪枝`，直接返回 -1；

**isBalanced(root) 函数**：
* **返回值**： 若 recur(root) != -1 ，则说明此树平衡，返回 true ； 否则返回 false 。


## 3. 🍭复杂度与代码
**时间复杂度 O(N)**： N 为树的节点数；最差情况下，需要递归遍历树的所有节点。
**空间复杂度 O(N)**： 最差情况下（树退化为链表时），系统递归需要使用 O(N) 的栈空间。
```
var isBalanced = function(root) {
  return recur(root) != -1;
};

const recur = root => {
  if(root === null) return 0;
  let left = recur(root.left);
  let right = recur(root.right);
  if(left === -1) return -1;
  if(right === -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
```

# 40. 数组中只出现一次的两个数字
## 1. 🎨题目描述
一个整型数组里除了两个数字只出现一次，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

## 2. 🧠解题思路
1. **遍历 numsnums 执行异或**：
设整型数组 nums = [a, a, b, b, ..., x, y] ，对 nums 中所有数字执行异或，得到的结果为 x⊕y 
2. **循环左移计算 m** ：
初始化一个辅助变量 m = 1 ，通过与运算从右向左循环判断，可 **获取整数 x⊕y 首位 1** ，记录于 m 中
1. **拆分 nums 为两个子数组**：
通过遍历判断 nums 中各数字和 m 做与运算的结果，可将数组拆分为两个子数组，并分别对两个子数组遍历求异或，则可得到两个只出现一次的数字
4. **分别遍历两个子数组执行异或**：
5. **返回值**
![](https://ttarea.com/post-images/1626328358988.png)
## 3. 🍭复杂度与代码
```
//因为相同的数字异或为0，任何数字与0异或结果是其本身。
//所以遍历异或整个数组最后得到的结果就是两个只出现一次的数字异或的结果：即 z = x ^ y
//我们根据异或的性质可以知道：z中至少有一位是1，否则x与y就是相等的。
//我们通过一个辅助变量m来保存z中哪一位为1.（可能有多个位都为1，我们找到最低位的1即可）。
//举个例子：z = 10 ^ 2 = 1010 ^ 0010 = 1000,第四位为1.
//我们将m初始化为1，如果（z & m）的结果等于0说明z的最低为是0
//我们每次将m左移一位然后跟z做与操作，直到结果不为0.
//此时m应该等于1000，同z一样，第四位为1.
//我们遍历数组，将每个数跟m进行与操作，结果为0的作为一组，结果不为0的作为一组
//例如对于数组：[1,2,10,4,1,4,3,3]，我们把每个数字跟1000做与操作，可以分为下面两组：
//nums1存放结果为0的: [1, 2, 4, 1, 4, 3, 3]
//nums2存放结果不为0的: [10] (碰巧nums2中只有一个10，如果原数组中的数字再大一些就不会这样了)
//此时我们发现问题已经退化为数组中有一个数字只出现了一次
//分别对nums1和nums2遍历异或就能得到我们预期的x和y
function FindNumsAppearOnce( nums ) {
  let x = 0, y = 0, z = 0, m = 1;
  for(let num of nums) z ^= num;
  while((z & m) === 0) m <<= 1;
  for(let num of nums) {
    if((num & m) != 0) x ^= num;
    else y ^= num;
  }
  return x > y ? [y, x] : [x, y]
};
```
# 41. 和为S的连续正数序列
## 1. 🎨题目描述
小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列?
## 2. 🧠解题思路
1. **什么是滑动窗口？**
顾名思义，首先是一个窗口，既然是一个窗口，就需要用窗口的左边界i和右边界j来唯一表示一个窗口，其次，滑动代表，窗口始终从左往右移动，这也表明左边界i和右边界j始终会往后移动，而不会往左移动。
这里我用左闭右开区间来表示一个窗口。比如
![](https://ttarea.com/post-images/1626331149464.png)
2. **滑动窗口的操作**
扩大窗口，j += 1
缩小窗口，i += 1

**算法步骤**：
1. 初始化，i=1,j=1, 表示窗口大小为0
2. 如果窗口中值的和小于目标值sum， 表示需要扩大窗口，j += 1
3. 否则，如果狂口值和大于目标值sum，表示需要缩小窗口，i += 1
4. 否则，等于目标值，存结果，缩小窗口，继续进行步骤2,3,4
## 3. 🍭复杂度与代码
**时间复杂度**：O(N)
**空间复杂度**：O(1)
```
function FindContinuousSequence(sum) {
  let l = 1, r = 1;
  let res = [];
  let tmp = 0;
  while(l < sum / 2) {
    if(tmp < sum){
      tmp += r;                //如果窗口中值的和小于目标值sum， 表示需要扩大窗口，j += 1
      r++                      //扩大窗口，j += 1
    }else if(tmp > sum) {
      tmp -= l;                //否则，如果窗口值和大于目标值sum，表示需要缩小窗口，i += 1
      l++;                     //缩小窗口，i += 1
    }else{
      let ans = [];
      for(let i = l; i < r; i++) ans.push(i);
      res.push(ans);
      tmp -= l;                //否则，等于目标值，存结果，缩小窗口，继续进行步骤
      ++l;
    }
  }
  return res;
}
```

# 42. 和为S的两个数字
## 1. 🎨题目描述
输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，返回两个数的乘积最小的，如果无法找出这样的数字，返回一个空数组即可。
## 2. 🧠解题思路
既然是递增数组，那么我们可以利用双指针来做这道题。
1. 指针 i 指向数组首位数字，指针 j 指向数组末位数字。
2. 若两数字之和大于了 target，则指针 j 往左移一位。
3. 若两数字之和小于了 target，则指针 i 往右移一位。
4. 若两数字之和等于了 target，返回结果 [i, j] 即可。

## 3. 🍭复杂度与代码
**时间复杂度 O(N**)： N 为数组 nums 的长度；双指针共同线性遍历整个数组。
**空间复杂度 O(1)**： 变量 i, j 使用常数大小的额外空间。
```
function FindNumbersWithSum(nums, target){
  let l = 0, r = nums.length - 1;
  while(l < r){
      if(nums[l] + nums[r] === target) return [nums[l], nums[r]];
      else if (nums[l] + nums[r] > target) r--;
      else l++;
  }
  return [];
}
```


# 43. 左旋转字符串
## 1. 🎨题目描述
汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列 S，请你把其循环左移 K 位后的序列输出（保证 K 小于等于 S 的长度）。例如，字符序列S=”abcXYZdef”,要求输出循环左移 3 位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
## 2. 🧠解题思路
应用字符串切片函数，可方便实现左旋转字符串。
获取字符串 s[n:] 切片和 s[:n] 切片，使用 "+" 运算符拼接并返回即可。
![](https://ttarea.com/post-images/1626333828951.png)
## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为字符串 s 的长度，字符串切片函数为线性时间复杂度；
**空间复杂度 O(N)**： 两个字符串切片的总长度为 N 。
```
function LeftRotateString(str, n){
  return str ? str.slice(n) + str.slice(0,n) : ''   
}
```

# 44. 翻转单词序列
## 1. 🎨题目描述
牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“nowcoder. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a nowcoder.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

## 2. 🧠解题思路
我们发现其实不需要两次反转，一次就够了，还是以" hello world! "为例：
1. 数据清理， 即将左右空格去掉， 变为"hello world!"
2. 按空格拆分单词，变为" ["hello", "world!"]
3. 单词列表执行一次反转，变为 [world!", "hello"]

## 3. 🍭复杂度与代码
**时间复杂度**：O(N)
**空间复杂度**：O(N)
```
function ReverseSentence(s){
    return s.split(' ').filter(item => item !== '').reverse().join(' ');
}
```

# 45. 扑克牌顺子
## 1. 🎨题目描述
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

## 2. 🧠解题思路
根据题意，此 5 张牌是顺子的 **充分条件** 如下：
1. 除大小王外，所有牌 无重复 ；
2. 设此 5 张牌中最大的牌为 max ，最小的牌为 min （大小王除外），则需满足：
        max - min < 5
![](https://ttarea.com/post-images/1626336802028.png)
**集合 Set + 遍历**
* 遍历五张牌，遇到大小王（即 0 ）直接跳过。
* **判别重复**： 利用 Set 实现遍历判重， Set 的查找方法的时间复杂度为 O(1)；
* **获取最大 / 最小的牌**： 借助辅助变量 max 和 min ，遍历统计即可。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** = O(5) = O(1)： 其中 N 为 nums 长度，本题中 N≡5 ；遍历数组使用 O(N)时间。
**空间复杂度 O(N)** = O(5) = O(1)： 用于判重的辅助 Set 使用 O(N) 额外空间。
```
var isStraight = function(nums) {
  const set = new Set();
  let min = 14, max = 0;            // min和max的初始值是两个边界值[0, 13]
  for(const num of nums){
    if(!num) continue               // 遇到大小王 跳过
    if(set.has(num)) return false;  // 遇到重复则直接 返回false
    set.add(num);
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return max - min < 5;
};
```

# 46. 圆圈中最后剩下的数字
## 1. 🎨题目描述
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626340197825.png)
总结一下反推的过程，就是 (当前index + m) % 上一轮剩余数字的个数。

## 3. 🍭复杂度与代码
**时间复杂度 O(n)** ： 状态转移循环 n - 1 次使用 O(n) 时间，状态转移方程计算使用 O(1) 时间；
**空间复杂度 O(1)** ： 使用常数大小的额外空间；
```
function LastRemaining_Solution(n, m){
    let ans = 0;
    for(let i = 2; i <= n; i++){
      ans = (ans + m) % i;
    }
    return ans;
}
```
# 47. 求1+2+3+...+n
## 1. 🎨题目描述
求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626344611159.png)
本题需要实现 “**当 n = 1 时终止递归**” 的需求，可通过短路效应实现。
n > 1 && sumNums(n - 1) // 当 n = 1 时 n > 1 不成立 ，此时 “短路” ，终止后续递归

## 3. 🍭复杂度与代码
**时间复杂度 O(n)** ： 计算 n + (n-1) + ... + 2 + 1 需要开启 n 个递归函数。
**空间复杂度 O(n)** ： 递归深度达到 n ，系统使用 O(n) 大小的额外空间。
```
function Sum_Solution(n){
    return n && Sum_Solution(n - 1) + n;
}
```


# 47. 不用加减乘除做加法
## 1. 🎨题目描述
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

## 2. 🧠解题思路
观察发现，**无进位和** 与 **异或运算** 规律相同，**进位** 和 **与运算** 规律相同（并需左移一位）。因此，无进位和 n 与进位 c 的计算公式如下；
![](https://ttarea.com/post-images/1626353011855.png)
![](https://ttarea.com/post-images/1626353020936.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(1)** ： 最差情况下（例如 a = 0x7fffffff , b = 1 时），需循环 32 次，使用 O(1) 时间；每轮中的常数次位操作使用 O(1)时间。
**空间复杂度 O(1)**： 使用常数大小的额外空间。
```
function Add(num1, num2){
    while(num2){
      let c = (num1 & num2) << 1;     // c = 进位
      num1 ^= num2;                   // num1 = 非进位和
      num2 = c;                       // num2 = 进位
    }
    return num1;
}
```

# 48. 把字符串转换成整数
## 1. 🎨题目描述
将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626354461073.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为字符串长度，线性遍历字符串占用 O(N) 时间。
**空间复杂度 O(N)** ： 删除首尾空格后需建立新字符串，最差情况下占用 O(N) 额外空间。
```
function StrToInt(str){
    let reg =/^(\-|\+)?\d+?$/
    return reg.test(str)?Number(str):0
}
```


# 47. 数组中重复的数字
## 1. 🎨题目描述
在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任一一个重复的数字。 例如，如果输入长度为7的数组[2,3,1,0,2,5,3]，那么对应的输出是2或者3。存在不合法的输入的话输出-1

## 2. 🧠解题思路
通过题意，我们可以使用哈希表来实现，分析如下：
1. 遍历数组，若当前数字不存在与哈希表，则添加到哈希表即可。
2. 若当前数字哈希表中已存在，则返回结果。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 遍历数组使用 O(N) ，HashSet 添加与查找元素皆为 O(1) 。
**空间复杂度 O(N)** ： HashSet 占用 O(N) 大小的额外空间。
```
function duplicate( nums ) {
  let map = new Map();
  for(let i of nums){
    if(map.has(i)) return i;
    map.set(i, 1);
  }
  return -1;
};
```

# 51. 构建乘积数组
## 1. 🎨题目描述
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

## 2. 🧠解题思路
这题要求的是**每个元素的值是除自己以外其他所有元素的乘积**。最简单的一种方式就是把所有元素都相乘，然后再用这个乘积除以每一个元素即可。但题中要求的是不能使用除法，所以这种方式是行不通的。

如果我们能计算**每个元素左边所有元素的乘积和右边所有元素的乘积**，只需要把他们相乘就可以满足这题的要求，就像下面这样，如果我们要求元素4的值
![](https://ttarea.com/post-images/1626358044698.png)
## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为数组长度，两轮遍历数组 a ，使用 O(N) 时间。
**空间复杂度 O(1)** ： 变量 tmp 使用常数大小额外空间（数组 b 作为返回值，不计入复杂度考虑）。
```
function multiply(array) {
  if (array === null || array.length === 0)  return array;
    // 先乘这个数的左边，在成这个数的右边，最后相成，避免掉当前数
    let n = array.length;
    let res = new Array(n);
    res[0] = 1;
    for(let i = 1; i < n; i++){             //当前元素左边的所有元素乘积（不包含当前元素）
      res[i] = res[i - 1] * array[i - 1];
    }
    let right = 1;                          //right表示当前元素右边所有元素的乘积（不包含当前元素）,
    for(let i = n - 1; i >= 0; i--){
      res[i] *= right;                      //res[i]表示的是左边的乘积，他俩相乘就是除了自己以外数组的乘积
      right *= array[i];
    }
    return res;
}
```

# 51. 正则表达式匹配
## 1. 🎨题目描述
请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626398679406.png)
## 3. 🍭复杂度与代码
**时间复杂度 O(MN)** ： 其中 M, N 分别为 s 和 p 的长度，状态转移需遍历整个 dp 矩阵。
**空间复杂度 O(MN)** ： 状态矩阵 dp 使用 O(MN) 的额外空间。
```
function match( str ,  pattern ) {
  // let pat = new RegExp('^' + pattern + '$', 'g');
  // return pat.test(str);
  let m = str.length + 1, n = pattern.length + 1;
  let dp = Array.from({length: m + 1},x => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for(let j = 2; j < n; j += 2){
    dp[0][j] = dp[0][j-2] && pattern.charAt(j-1) === '*';
  }
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      dp[i][j] = pattern.charAt(j-1) === '*' ? 
      dp[i][j-2] || dp[i-1][j] && (str.charAt(i-1) === pattern.charAt(j-2) || pattern.charAt(j-2) === '.') 
      : dp[i-1][j-1] && (pattern.charAt(j-1) === '.' || str.charAt(i-1) === pattern.charAt(j-1));
    }
  }
  return dp[m-1][n-1]
}
```

# 51. 表示数值的字符串
## 1. 🎨题目描述
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626399377728.png)
**我首先想到的是判断否false而不是判断是true，毕竟有这么多条件满足才能判断true，但是只要有一个条件不满足就可以判断false**，最后代码的效率也还可以，那么接下来进入正题吧：

首先定义了四个flag，对应四种字符
是否有数字：hasNum
是否有e：hasE
是否有正负符号：hasSign
是否有点：hasDot
其余还定义了字符串长度n以及字符串索引index
先处理一下开头的空格，index相应的后移
然后进入循环，遍历字符串
如果当前字符c是数字：将hasNum置为true，index往后移动一直到非数字或遍历到末尾位置；如果已遍历到末尾(index == n)，结束循环
如果当前字符c是'e'或'E'：如果e已经出现或者当前e之前没有出现过数字，返回false；否则令hasE = true，并且将其他3个flag全部置为false，因为要开始遍历e后面的新数字了
如果当前字符c是+或-：如果已经出现过+或-或者已经出现过数字或者已经出现过'.'，返回false；否则令hasSign = true
如果当前字符c是'.'：如果已经出现过'.'或者已经出现过'e'或'E'，返回false；否则令hasDot = true
如果当前字符c是' '：结束循环，因为可能是末尾的空格了，但也有可能是字符串中间的空格，在循环外继续处理
如果当前字符c是除了上面5种情况以外的其他字符，直接返回false
处理空格，index相应的后移
如果当前索引index与字符串长度相等，说明遍历到了末尾，但是还要满足hasNum为true才可以最终返回true，因为如果字符串里全是符号没有数字的话是不行的，而且e后面没有数字也是不行的，但是没有符号是可以的，所以4个flag里只要判断一下hasNum就行；所以最后返回的是hasNum && index == n
如果字符串中间有空格，按以上思路是无法遍历到末尾的，index不会与n相等，返回的就是false

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为字符串 s 的长度，判断需遍历字符串，每轮状态转移的使用 O(1) 时间。
**空间复杂度 O(1)** ： states 和 p 使用常数大小的额外空间。
```
function isNumeric( str ) {
  // return str.match(/^[\+-]?\d*(\.\d+)?([eE][-\+]?\d+)?$/)
  // return !isNaN(str)
   let n = str.length;
   let index = 0;
   let hasNum = false, hasE = false, hasSign = false, hasDot = false;
   while(index < n && str.charAt(index) === ' ') index++;
   while(index < n){
     while(index < n && str.charAt(index) >= '0' && str.charAt(index) <= '9'){
       index++;
       hasNum = true;
     }
     if(index === n) break;
     let c = str.charAt(index);
     if(c === 'e' || c === 'E'){
       if(hasE || !hasNum) return false;
       hasE = true;
       hasNum = false;
       hasSign = false;
       hasDot = false;
     }else if(c === '+' || c === '-'){
        if(hasSign || hasNum || hasDot) return false;
        hasSign = true;
     }else if(c === '.'){
       if(hasDot || hasE) return false;
       hasDot = true;
     }else if(c === ' '){
       break;
     }else{
       return false;
     } 
     index++;
   }
   while(index < n && str.charAt(index) === '') index++;
   return hasNum && index === n;
}
```


# 53_1. 最长不含重复字符的子字符串
## 1. 🎨题目描述
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

## 2. 🧠解题思路
* **哈希表 dic 统计**： 指针 j 遍历字符 s ，哈希表统计字符 s[j] 最后一次出现的索引 。
* **更新左指针 i** ： 根据上轮左指针 i 和 dic[s[j]] ，每轮更新左边界 i ，保证区间 [i+1,j] 内无重复字符且最大。
        i=max(dic[s[j]],i)
* **更新结果 res** ： 取上轮 res 和本轮双指针区间 [i+1,j] 的宽度（即 j - i ）中的最大值。
        res=max(res,j−i)
![](https://ttarea.com/post-images/1626400568726.png)
![](https://ttarea.com/post-images/1626400572547.png)
![](https://ttarea.com/post-images/1626400576165.png)
![](https://ttarea.com/post-images/1626400579117.png)
## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为字符串长度，动态规划需遍历计算 dp 列表。
**空间复杂度 O(1)** ： 字符的 ASCII 码范围为 0 ~ 127 ，哈希表 dicdic 最多使用 O(128) = O(1) 大小的额外空间。
```
var lengthOfLongestSubstring = function(s) {
  let dic = new Map();
  let i = -1, res = 0;
  for(let j = 0; j < s.length; j++) {
    if(dic.has(s[j])){
      i = Math.max(i, dic.get(s[j]));
    }
    dic.set(s[j], j);
    res = Math.max(res, j - i);
  }
  return res;
};
```

# 54. 字符流中第一个不重复的字符
## 1. 🎨题目描述
请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

## 2. 🧠解题思路
对于一道题，如果没有思路，就要针对题目给自己问问题。然后针对问题，来考虑需要什么样的算法或者数据结构。
* A1：对于“重复问题”，惯性思维应该想到哈希或者set。对于“字符串问题”，大多会用到哈希。因此一结合，应该可以想到，判断一个字符是否重复，可以选择用哈希
* A2：对于字符流，源源不断的往池子中添加字符，然后还要返回第一个满足什么条件的字符，显然设计到了“顺序”，也就是先来的先服务，这种先进先出的数据结构不就是队列嘛。因此，这里可以用队列。

假如你已经知道了要用hash 和 queue 这两个数据结构，你可以试着自己想一想，接下来的算法过程是怎么样的？
这里我提供一个算法过程，如下：
1. 对于Insert(char ch)操作， 如果ch是第一次出现，则添加到q中，然后在mp中记录一下次数，如果不是第一次出现，也就是重复了，那么我们就没必要添加到q中，但是还是需要在mp中更新一下次数，因为之后要根据次数来判断是否重复。
2. 对于FirstAppearingOnce()操作，我们直接判断q的头部，然后在mp中检查一下，是否重复，如果没有重复，那就是我们想要的数据。否则，如果重复了，那就应该弹出头部，然后判断下一个头部是否满足要求。
## 3. 🍭复杂度与代码
**时间复杂度：O(N)**
**空间复杂度：O(N)**
```
let map = {};
function Init(){
    map = {};
}
function Insert(ch){
    map[ch] = map[ch] ? map[ch] + 1 : 1;
}
function FirstAppearingOnce(){
    for(const i in map){
      if(map[i] === 1) return i;
    }
    return '#'
}
```

# 55. 链表中环的入口结点
## 1. 🎨题目描述
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，返回null。
## 2. 🧠解题思路
**双指针法**
根据：
1. f=2s （快指针每次2步，路程刚好2倍）
2. f = s + nb (相遇时，刚好多走了n圈）
推出：s = nb

从head结点走到入环点需要走 ： a + nb， 而slow已经走了nb，那么slow再走a步就是入环点了。
如何知道slow刚好走了a步？ 从head开始，和slow指针一起走，相遇时刚好就是a步
![](https://ttarea.com/post-images/1626412923358.png)
![](https://ttarea.com/post-images/1626412926902.png)
![](https://ttarea.com/post-images/1626412931760.png)
![](https://ttarea.com/post-images/1626412935065.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ：第二次相遇中，慢指针须走步数 a < a + b；第一次相遇中，慢指针须走步数 a + b - x < a + b，其中 x 为双指针重合点与环入口距离；因此总体为线性复杂度；
**空间复杂度 O(1)** ：双指针使用常数大小的额外空间。
```
var detectCycle = function(head) {
  let fast = head, slow = head;
  while(true) {
    if(!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow) break;
  }
  fast = head;
  while(slow != fast){
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};
```

# 56. 删除链表中重复的结点
## 1. 🎨题目描述
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

## 2. 🧠解题思路
**1.1 递归函数定义**
**递归最基本的是要明白递归函数的定义**！ 
递归函数直接使用题目给出的函数 deleteDuplicates(head) ，它的含义是 删除以 head 作为开头的有序链表中，值出现重复的节点。

**1.2 递归终止条件**
终止条件就是能想到的基本的、不用继续递归处理的case。
* 如果 head 为空，那么肯定没有值出现重复的节点，直接返回 head；
* 如果 head.next 为空，那么说明链表中只有一个节点，也没有值出现重复的节点，也直接返回 head。

**1.3 递归调用**
什么时候需要递归呢？我们想一下这两种情况：
* 如果 head.val != head.next.val ，说明头节点的值不等于下一个节点的值，所以当前的 head 节点必须保留；但是 head.next 节点要不要保留呢？我们还不知道，需要对 head.next 进行递归，即对 head.next 作为头节点的链表，去除值重复的节点。所以 head.next = self.deleteDuplicates(head.next).
* 如果 head.val == head.next.val ，说明头节点的值等于下一个节点的值，所以当前的 head 节点必须删除，并且 head 之后所有与 head.val 相等的节点也都需要删除；删除到哪个节点为止呢？需要用 move 指针一直向后遍历寻找到与 head.val 不等的节点。此时 move 之前的节点都不保留了，因此返回 deleteDuplicates(move);

**1.4 返回结果**
题目让我们返回删除了值重复的节点后剩余的链表，结合上面两种递归调用的情况。
* 如果 head.val != head.next.val ，头结点需要保留，因此返回的是 head；
* 如果 head.val == head.next.val ，头结点需要删除，需要返回的是deleteDuplicates(move);。
对链表 1 -> 2 -> 2 -> 3 递归的过程如下。
![](https://ttarea.com/post-images/1626416239662.jpeg)

## 3. 🍭复杂度与代码
**时间复杂度：O(N)**，每个节点访问了一次。
**空间复杂度：O(N)**，递归调用的时候会用到了系统的栈。
```
function deleteDuplication(pHead) {
  if (!pHead || !pHead.next) return pHead;
  if (pHead.val !== pHead.next.val) pHead.next = deleteDuplication(pHead.next);
  else {
    let move = pHead.next;
    while (move && pHead.val === move.val) {
      move = move.next;
    }
    return deleteDuplication(move);
  }
  return pHead;
}
```

# 56_1. 删除排序链表中的重复元素
## 1. 🎨题目描述
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 **只出现一次** 。
## 2. 🧠解题思路
指定 cur 指针指向头部 head
当 cur 和 cur.next 的存在为循环结束条件，当二者有一个不存在时说明链表没有去重复的必要了
当 cur.val 和 cur.next.val 相等时说明需要去重，则将 cur 的下一个指针指向下一个的下一个，这样就能达到去重复的效果
如果不相等则 cur 移动到下一个位置继续循环
![](https://ttarea.com/post-images/1626416958181.png)
![](https://ttarea.com/post-images/1626416961385.png)
![](https://ttarea.com/post-images/1626416964543.png)
## 3. 🍭复杂度与代码
**时间复杂度：O(N)**，每个节点访问了一次。
**空间复杂度：O(N)**，递归调用的时候会用到了系统的栈。
```
var deleteDuplicates = function(head) {
  let cur = head;
  while(cur && cur.next){
    if(cur.val === cur.next.val) cur.next === cur.next.next;
    else cur = cur.next;
  }
  return head;
}
```

# 57. 二叉树的下一个结点
## 1. 🎨题目描述
给定一个二叉树其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的next指针。下图为一棵有9个节点的二叉树。树中从父节点指向子节点的指针用实线表示，从子节点指向父节点的用虚线表示

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626510575523.png)
红色数字是中序遍历的顺序。接下来，我们就假设，如果当前结点分别是1,2 ... 7，下一结点看有什么规律没？
* 1 => 2 // 显然下一结点是 1 的父亲结点
* 2 => 3 // 下一节点是当前结点右孩子的左孩子结点，其实你也应该想到了，应该是一直到左孩子为空的那个结点
* 3 => 4 // 跟 2 的情况相似，当前结点右孩子结点的左孩子为空的那个结点
* 4 => 5 // 5 是父亲结点 3 的父亲结点，发现和1有点像，因为 1，3,同样是父亲结点的左孩子
* 5 => 6 // 跟 4=>5 一样的道理
* 6 => 7 // 跟 3=>4 一样的道理
* 7 => null // 因为属于最尾结点

1. 如果结点有右子树，右子树最左的结点为该节点的下一个结点；
2. 如果结点没有右子树，且该结点为它父结点的左子结点，那么该结点的下一个结点是它的父结点；
3. 如果结点没有右子树，且该结点为它父结点的右子结点，那么沿其父节点向上寻找，其中有父结点为上个父节点的左子节点，那么这上个父节点为该节点的下一个节点；

## 3. 🍭复杂度与代码
**时间复杂度：O(n)**
**空间复杂度：O(1)**
```
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
```

# 58. 对称的二叉树
## 1. 🎨题目描述
请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626516309660.png)
**isSymmetric(root)** ：
* 特例处理： 若根节点 root 为空，则直接返回 truetrue 。
* 返回值： 即 recur(root.left, root.right) ;

**recur(L, R)** ：
`终止条件`：
1. 当 L 和 R 同时越过叶节点： 此树从顶至底的节点都对称，因此返回 true ；
2. 当 L 或 R 中只有一个越过叶节点： 此树不对称，因此返回 false ；
3. 当节点 L 值 不等于 节点 R 值： 此树不对称，因此返回 false ；

`递推工作`：
1. 判断两节点 L.left 和 R.right 是否对称，即 recur(L.left, R.right) ；
2. 判断两节点 L.right 和 R.left 是否对称，即 recur(L.right, R.left) ；

`返回值`： 两对节点都对称时，才是对称树，因此用与逻辑符 & 连接。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： 其中 N 为二叉树的节点数量，每次执行 recur() 可以判断一对节点是否对称，因此最多调用 N/2 次 recur() 方法。
**空间复杂度 O(N)** ： 最差情况下 二叉树退化为链表，系统使用 O(N) 大小的栈空间。
```
function isSymmetrical(pRoot){
  return pRoot === null ? true : recur(pRoot.left, pRoot.right);
}
function recur(L,R){
  if(L === null && R === null) return true;
  if(L === null || R === null || L.val !== R.val) return false;
  return recur(L.left, R.right) && recur(L.right, R.left);
}
```



# 59_1. 从上到下打印二叉树（一行）
## 1. 🎨题目描述
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626523551296.png)
1. **特例处理**： 当树的根节点为空，则直接返回空列表 [] ；
2. **初始化**： 打印结果列表 res = [] ，包含根节点的队列 queue = [root] ；
3. **BFS 循环**： 当队列 queue 为空时跳出；
        * **出队**： 队首元素出队，记为 node；
        * **打印**： 将 node.val 添加至列表 res 尾部；
        * **添加子节点**： 若 node 的左（右）子节点不为空，则将左（右）子节点加入队列 queue ；
4. **返回值**： 返回打印结果列表 res 即可。


## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为二叉树的节点数量，即 BFS 需循环 N 次。
**空间复杂度 O(N)** ： 最差情况下，即当树为平衡二叉树时，最多有 N/2 个树节点同时在 queue 中，使用 O(N) 大小的额外空间。
```
var levelOrder = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [root];
  while(queue.length){
    let node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
};
```

# 59_2. 从上到下打印二叉树（分行）
## 1. 🎨题目描述
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626523891340.png)
1. **特例处理**： 当根节点为空，则返回空列表 [] ；
2. **初始化**： 打印结果列表 res = [] ，包含根节点的队列 queue = [root] ；
3. **BFS 循环**： 当队列 queue 为空时跳出；
    * 新建一个临时列表 tmp ，用于存储当前层打印结果；
    * **当前层打印循环**： 循环次数为当前层节点数（即队列 queue 长度）；
        1. **出队**： 队首元素出队，记为 node；
        2. **打印**： 将 node.val 添加至 tmp 尾部；
        3. **添加子节点**： 若 node 的左（右）子节点不为空，则将左（右）子节点加入队列 queue ；
    * 将当前层结果 tmp 添加入 res 。
4. **返回值**： 返回打印结果列表 res 即可。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为二叉树的节点数量，即 BFS 需循环 N 次。
**空间复杂度 O(N)** ： 最差情况下，即当树为平衡二叉树时，最多有 N/2 个树节点同时在 queue 中，使用 O(N) 大小的额外空间。
```
var levelOrder = function(root) {
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
    let tmp = [];
    let len = queue.length;
    while(len--){
      let node = queue.shift();
      tmp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(tmp);    
  }
  return res;
};
```



# 59_3. 之字形打印二叉树（分行）
## 1. 🎨题目描述
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

## 2. 🧠解题思路
* **偶数层倒序**： 若 res 的长度为 **奇数** ，说明当前是偶数层，则对 tmp 执行 **倒序** 操作。
## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： NN 为二叉树的节点数量，即 BFS 需循环 N 次，占用 O(N) 。共完成 少于 N 个节点的倒序操作，占用 O(N) 。
**空间复杂度 O(N)** ： 最差情况下，即当树为满二叉树时，最多有 N/2 个树节点同时在 queue 中，使用 O(N) 大小的额外空间。
```
var levelOrder = function(root) {
  if(!root) return [];
  const res = [];
  const queue = [root];
  while(queue.length){
    const tmp = [];
    let len = queue.length;
    while(len--){
      const node = queue.shift();
      tmp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.length % 2 === 1 ? res.push(tmp.reverse()) : res.push(tmp); // 余数为0，第一层（奇数层）正常放入，余数为1，第二层（偶数层）取反再放入
  }
  return res;
};
```

# 61. 序列化二叉树
## 1. 🎨题目描述
请实现两个函数，分别用来序列化和反序列化二叉树，不对序列化之后的字符串进行约束，但要求能够根据序列化之后的字符串重新构造出一棵与原二叉树相同的树。
## 2. 🧠解题思路
### 序列化
* 递归遍历一棵树，重点关注当前节点，它的子树的遍历交给递归完成：
**“serialize函数，请帮我分别序列化我的左右子树，我等你的返回结果，再拼接一下。”**
* 选择前序遍历，是因为 根|左|右根∣左∣右 的打印顺序，在反序列化时更容易定位出根节点的值。
* 遇到 null 节点也要翻译成特定符号，反序列化时才知道这里是 null。

![](https://ttarea.com/post-images/1626529082759.png)
### 反序列化
前序遍历的序列化字符串，就像下图右一：
![](https://ttarea.com/post-images/1626529266234.png)
* 定义函数 buildTree 用于还原二叉树，传入由序列化字符串转成的 list 数组。
* 逐个 pop 出 list 的首项，构建当前子树的根节点，顺着 list，构建顺序是根节点 > 左子树 > 右子树。
        1. 如果弹出的字符为 "X"，则返回 null 节点。
        2. 如果弹出的字符是数值，则创建root节点，并递归构建root的左右子树，最后返回root。
![](https://ttarea.com/post-images/1626529302558.png)

## 3. 🍭复杂度与代码
**时间复杂度 O(N)** ： N 为二叉树的节点数，层序遍历需要访问所有节点，最差情况下需要访问 N + 1 个 null ，总体复杂度为 O(2N + 1) = O(N 。
**空间复杂度 O(N)**： 最差情况下，队列 queue 同时存储 (N+1)/2 个节点（或 N+1 个 null ），使用 O(N) ；列表 res 使用 O(N)。
```
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
```

# 62. 二叉搜索树的第k个结点
## 1. 🎨题目描述
给定一棵二叉搜索树，请找出其中的第k小的TreeNode结点。

## 2. 🧠解题思路
![](https://ttarea.com/post-images/1626577327421.png)
可以看到，4是按大小排序时，第3个节点。如果K=3，即4为所求的值。而对应大小排序的就是中序遍历，中序遍历结果是{2,3,4,5,6,7,8}，**所以本题核心需要使用到中序遍历**。然后对中序遍历的结果中，取第K个元素即可。这里可以使用数字或者集合存储遍历结果，然后取第k个，但是会产生额外的空间复杂度，当然也可以使用一个变量记录遍历的节点数，当遍历到K个节点时即为所求。

## 3. 🍭复杂度与代码
**时间复杂度 O(N)**：使用数组存储，代码看起来非常的清晰。这个代码还有优化空间，因为完成了所有的遍历，事实上可以在遍历到K时，让遍历退出。
**空间复杂度 O(N)**： 使用数组存储
```
function KthNode(pRoot, k){
  if(!pRoot || !k) return null;
  const res = [];
  centerSort(pRoot, res);
  return res[k - 1];
}
const centerSort = (root, list) => {
  if(!root) return null;
  centerSort(root.left, list);
  list.push(root);
  centerSort(root.right, list);
}
```


# 63. 数据流中的中位数
## 1. 🎨题目描述
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
## 2. 🧠解题思路
其实不需要每次添加元素的时候，都对全部元素重新排序。如果之前一直保证元素是有序的，那么添加新元素的时候，只需要将元素插入到正确位置即可，查找正确位置可以通过「二分搜索」来完成。

为了保证之前的元素有序，针对每个新添加的元素都将其放入正确位置。


## 3. 🍭复杂度与代码
**时间复杂度O(N)** : 二分查找需要O(logN)的复杂度，移动元素需要O(N)复杂度，所以时间复杂度是O(N)。
**空间复杂度O(N)**
```
let arr = [];
function Insert(num)
{
  if(!arr.length){
    arr.push(num);
    return;
  }
  let left = 0, right = arr.length - 1;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === num){
      arr.splice(mid, 0, num);
      return
    }else if(arr[mid] < num){
      left = mid + 1;
    }else {
      right = mid - 1;
    }
  }
  arr.splice(right + 1, 0, num);
}
function GetMedian(){
  const length = arr.length;
  if(!length) return null;
  const mid = Math.floor((length - 1) / 2);
  if(length % 2) return arr[mid];
  return (arr[mid] + arr[mid + 1]) / 2; 
}
```

# 64. 滑动窗口的最大值
## 1. 🎨题目描述
给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。

例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

窗口大于数组长度的时候，返回空
## 2. 🧠解题思路
看题中给的数据
 1  3  -1 -3  5  3  6  7     
我们给一个窗口队列，来存放进入的数据

首先是1进入，队列为[1]，然后3进入，这时候3进入的时候先和它前面的数据进行比较，发现3>1，这时候把队列中1抛出

这时候-1进入队列，发现-1小于3，所以-1进入以后不进行任何操作。这时候队列为[3,-1]这时候其实窗口的大小已经为3啦

因为我们前面抛出一个1所以看着是两个数据。然后-3进入，这时候就要判断，窗口队列的长度是不是大于k，当大于k的时候

就要把队列的首元素抛出。-3进入的时候，明显长度没有超出，所以不用管，然后-3和队尾元素比较，小于队尾。进入队里无操作。

这时候队列是[3,-1,-3],随后5进入，这时候，队列的长度大于k，把队列头元素3抛出，然后进行判断，发现5比队尾元素大，这时候
抛出队尾的-3，这时候队尾元素变成-1，5还是大于-1，继续抛出，这时候队列中只有[5].然后6准备进入。

发现6大于队尾5,5抛出，6进入。7的操作同上。

**上面的操作结果为：队列的头元素永远是最大的，所以后面的(nums.length-k)次进入，只需要队列的头放入输出数组即可**

## 3. 🍭复杂度与代码
**时间复杂度O(n)** : 因为只有每次进入的时候，有时间复杂度，里面的判断和抛出都是O(1)的操作
**空间复杂度O(n)**
```
function maxInWindows(num, size){
  if(!size) return [];
  const numLength = num.length;
  let window = [],       //队列用来存放下标
      res = [];
  for(let i = 0; i < numLength; i++){
    if(i >= size + window[0]) window.shift();    // 如果 i 比窗口最大范围大, 移除队头
    while(window && num[i] > num[window[window.length - 1]]){
      window.pop();                   // 如果 nums[i] 比窗口中的值大，将窗口中的值删除
    }
    window.push(i);                   // 窗口中加入当前元素
    if(i >= size - 1) res.push(num[window[0]])   // 如果 i > size - 1，每次都记录最大值
  }
 return res;
}
```

# 65. 矩阵中的路径
## 1. 🎨题目描述
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。

## 2. 🧠解题思路
* **深度优先搜索**： 可以理解为暴力法遍历矩阵中所有字符串可能性。DFS 通过递归，先朝一个方向搜到底，再回溯至上个节点，沿另一个方向搜索，以此类推。
* **剪枝**： 在搜索中，遇到 这条路不可能和目标字符串匹配成功 的情况（例如：此矩阵元素和目标字符不同、此元素已被访问），则应立即返回，称之为 可行性剪枝 。
![](https://ttarea.com/post-images/1626588797412.png)

* **递归参数**： 当前元素在矩阵 board 中的行列索引 i 和 j ，当前目标字符在 word 中的索引 k 。
* **终止条件**：
        1. 返回 falsefalse ： (1) 行或列索引越界 `或` (2) 当前矩阵元素与目标字符不同 `或` (3) 当前矩阵元素已访问过 （ (3) 可合并至 (2) ） 。
        2. 返回 truetrue ： k = len(word) - 1 ，即字符串 word 已全部匹配。
* **递推工作**：
        1. 标记当前矩阵元素： 将 board[i][j] 修改为 **空字符** '' ，代表此元素已访问过，防止之后搜索时重复访问。
        2. 搜索下一单元格： 朝当前元素的 **上、下、左、右** 四个方向开启下层递归，使用 或 连接 （代表只需找到一条可行路径就直接返回，不再做后续 DFS ），并记录结果至 res 。
        3. 还原当前矩阵元素： 将 board[i][j] 元素还原至初始值，即 word[k] 。
* **返回值**： 返回布尔量 res ，代表是否搜索到目标字符串。

## 3. 🍭复杂度与代码
**时间复杂度 O(3^K*MN)** 
**空间复杂度 O(K)**
```
function hasPath( matrix ,  word ) {
  let row = matrix.length;
  let col = matrix[0].length;
  let dfs = function(i, j, matrix, word, index){
    if(i<0 || i>=row || j<0 || j>col || matrix[i][j] !== word[index]) return false;// 判断不符合条件
    if(index === word.length - 1) return true;  // word遍历完了
    let tmp = matrix[i][j];                     // 记录到board的值
    matrix[i][j] = '';                         // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
    let res = dfs(i-1, j, matrix, word, index+1) || dfs(i+1, j, matrix, word, index+1) || 
              dfs(i, j-1, matrix, word, index+1) || dfs(i, j+1, matrix, word, index+1)
    matrix[i][j] = tmp;                         // 恢复现场
    return res;
  }
  // 遍历整个board，找到初始位置点
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(dfs(i, j, matrix, word, 0 )) return true
    }
  }
  // 没找到
  return false;
}
```


# 66. 机器人的运动范围
## 1. 🎨题目描述
地上有一个rows行和cols列的方格。坐标从 [0,0] 到 [rows-1,cols-1]。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于threshold的格子。 例如，当threshold为18时，机器人能够进入方格[35,37]，因为3+5+3+7 = 18。但是，它不能进入方格[35,38]，因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

## 2. 🧠解题思路
* **深度优先搜索**： 可以理解为暴力法遍历矩阵中所有字符串可能性。DFS 通过递归，先朝一个方向搜到底，再回溯至上个节点，沿另一个方向搜索，以此类推。
* **剪枝**： 在搜索中，遇到 这条路不可能和目标字符串匹配成功 的情况（例如：此矩阵元素和目标字符不同、此元素已被访问），则应立即返回，称之为 可行性剪枝 。

`算法解析`：
**递归参数**： 当前元素在矩阵中的行列索引 i 和 j ，两者的数位和 si, sj 。
**终止条件**： 当 ① 行列索引越界 `或` ② 数位和超出目标值 k `或` ③ 当前元素已访问过 时，返回 00 ，代表不计入可达解。
**递推工作**：
        1. **标记当前单元格** ：将索引 (i, j) 存入 Set visited 中，代表此单元格已被访问过。
        2. **搜索下一单元格**： 计算当前元素的 `下、右` 两个方向元素的数位和，并开启下层递归 。
**回溯返回值**： 返回 1 + 右方搜索的可达解总数 + 下方搜索的可达解总数，代表从本单元格递归搜索的可达解总数。

## 3. 🍭复杂度与代码
**时间复杂度 O(MN)**： 最差情况下，机器人遍历矩阵所有单元格，此时时间复杂度为 O(MN) 。
**空间复杂度 O(MN)** ： 最差情况下，Set visited 内存储矩阵所有单元格的索引，使用 O(MN) 的额外空间。
```
function movingCount(threshold, rows, cols){
    let flag = new Array(rows).fill(0).map(x => Array(cols).fill(false));
    return getRes(flag, rows, cols, 0, 0, threshold);
}
function getRes(flag, row, col, x, y, k){
    // i >= m || j >= n是边界条件的判断     
    // k < sum(i, j)判断当前格子坐标是否满足条件    
    // flag[i][j]判断这个格子是否被访问过
    if(x < 0 || y < 0 || x >= row || y >= col || flag[x][y] || sum(x, y) > k) return 0;
    flag[x][y] = true;     // 标注这个格子被访问过
    return 1 + getRes(flag, row, col, x+1, y, k) + getRes(flag, row, col, x, y+1, k);  // 沿着当前格子的右边和下边继续访问
}
// 按位求和
function sum(row, col){
    let str = row + '' + col;
    let res = 0;
    for(let i = 0; i < str.length; i++){
        res += parseInt(str[i]);
    }
    return res;
}
```

# 67. 剪绳子
## 1. 🎨题目描述
给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

## 2. 🧠解题思路
前面提到：8 拆分为 3+3+2，此时乘积是最大的。然后就推测出来一个整数，要拆成多个 2 和 3 的和，保证乘积最大。原理很容易理解，因为 2 和 3 可以合成任何数字，例如5=2+3，但是5 < 2*3；例如6=3+3，但是6<3*3。所以根据贪心算法，就尽量将原数拆成更多的 3，然后再拆成更多的 2，保证拆出来的整数的乘积结果最大。

但上面的解法还有不足。如果整数 n 的形式是 3k+1，例如 7。按照上面规则，会拆分成“3 + 3 + 1”。但是在乘法操作中，1 是没作用的。此时，应该将 1 和 3 变成 4，也就是“3 + 3 + 1”变成“3 + 4”。此时乘积最大。

综上所述，算法的整体思路是：
* n 除 3 的结果为 a，余数是 b
* 当 b 为 0，直接将 a 个 3 相乘
* 当 b 为 1，将（a-1）个 3 相乘，再乘以 4
* 当 b 为 2，将 a 个 3 相乘，再乘以 2

## 3. 🍭复杂度与代码
**时间复杂度是 O(1)**
**空间复杂度是 O(1)**
```
function cutRope(number)
{
  if(number === 2) return 1;
  if(number === 3) return 2;
  // a的含义：n能拆成的3的个数
  const a = Math.floor(number / 3);
  const b = number % 3;
  if(b === 0) return Math.pow(3, a);
  // n是 3k + 1，例如7。拆成3、3、1。由于有1对结果无法有贡献，所以最后的3、1换成4
  if(b === 1) return Math.pow(3, a-1) * 4;
  return Math.pow(3, a) * 2
}
```

# 68. 回文链表
## 1. 🎨题目描述
请判断一个链表是否为回文链表。
## 2. 🧠解题思路
快慢指针，起初都指向表头，快指针一次走两步，慢指针一次走一步，遍历结束时：
* 要么，slow 正好指向中间两个结点的后一个。
* 要么，slow 正好指向中间结点。
* 用 prev 保存 slow 的前一个结点，通过prev.next = null断成两个链表。

将后半段链表翻转，和前半段从头比对。空间复杂度降为O(1)。
![](https://ttarea.com/post-images/1626591769578.png)

**如何翻转单链表**
可以这么思考：一次迭代中，有哪些指针需要变动：
* 每个结点的 next 指针要变动。
* 指向表头的 slow 指针要变动。
* 需要有指向新链表表头的 head2 指针，它也要变。
![](https://ttarea.com/post-images/1626591819088.png)

## 3. 🍭复杂度与代码
**时间复杂度** : O(n)
**空间复杂度** : O(1)
```
var isPalindrome = function (head) {
  if(!head || !head.next) return true;
  let fast = head;
  let slow = head;
  let prev;
  while(fast && fast.next){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev = null;
  let head2 = null;
  while(slow){
    let tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  while(head && head2){
    if(head.val !== head2.val) return false;
    head = head.next;
    head2 =head2.next;
  }
  return true;
};
```