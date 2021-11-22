//数值的整数次幂
function Power(base, exponent)
{
    const isNegative = exponent < 0;
    const result = absPower(base,Math.abs(exponent));
    return isNegative ? 1/result : result;
}
function absPower(base,exponent){
    if(exponent === 0) return 1;
    if(exponent === 1) return base;
    const subResult = absPower(base,Math.floor(exponent / 2));
    return exponent % 2 ? subResult*subResult*base : subResult*subResult
}


// 时间复杂度 O(log2n)​： 二分的时间复杂度为对数级别。
// 空间复杂度 O(logn)： 采用递归结构。
// 位运算
var myPow = function(x, n) {
  if(x === 0) return 0;
  let res = 1;
  if(n < 0){                //将负指数转化为正数
    x = 1 / x;
    n = -n;
  }
  while(n > 0){
    if(n & 1) res *= x;     // 等价于n%2取余数为1 奇数。奇数情况多一项 所以要多成一个x
    x *= x;                 // n为偶数 直接累乘
    n = n >>> 1;            // n除以2  如果是正数，返回正数，如果是负数，返回负数 + 2的30次方
  }
  return res;
};