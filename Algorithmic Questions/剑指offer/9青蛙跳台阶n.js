//青蛙跳台阶 变态版 f(n) = 2^(n - 1) 每次1-n阶
function jumpFloorII(number)
{
  return Math.pow(2, number - 1);
}