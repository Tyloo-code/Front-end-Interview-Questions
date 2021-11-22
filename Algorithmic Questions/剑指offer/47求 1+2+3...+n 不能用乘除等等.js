// 求 1+2+3...+n 不能用乘除等等
// 时间复杂度 O(n)O(n) ： 计算 n + (n-1) + ... + 2 + 1n+(n−1)+...+2+1 需要开启 nn 个递归函数。
// 空间复杂度 O(n)O(n) ： 递归深度达到 nn ，系统使用 O(n)O(n) 大小的额外空间。
function Sum_Solution(n)
{
    return n && Sum_Solution(n - 1) + n;
}