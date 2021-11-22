// 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
// 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

// 借助 num & (num - 1) 来直接去除 num 的二进制中最右边的 1。
var hammingDistance = function(x, y) {
  let temp = x ^ y;
  let res = 0;
  while(temp){
    temp = temp & (temp - 1);
    res++
  }
  return res;
};