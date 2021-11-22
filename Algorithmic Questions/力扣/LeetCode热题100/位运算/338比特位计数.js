// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
// 时间复杂度：O(n)。对于每个整数，只需要 O(1) 的时间计算「一比特数」。
// 空间复杂度：O(1)。
var countBits = function(n) {
  let result = [0];
  for(let i = 1; i <= n; i++){
    if(i % 2 === 1) result[i] = result[i - 1] + 1;
    else result[i] = result[i / 2];
  }
  return result;
};