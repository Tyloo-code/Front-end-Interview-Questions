// 给你一根长度为n的绳子，请把绳子剪成整数长的m段，求每段绳子最大乘积
// 综上所述，算法的整体思路是：
// n 除 3 的结果为 a，余数是 b
// 当 b 为 0，直接将 a 个 3 相乘
// 当 b 为 1，将（a-1）个 3 相乘，再乘以 4
// 当 b 为 2，将 a 个 3 相乘，再乘以 2

// 贪心算法
// 空间复杂度是 O(1)，时间复杂度是 O(1)。
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