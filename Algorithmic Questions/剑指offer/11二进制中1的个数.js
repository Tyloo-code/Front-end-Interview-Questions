//二进制中1的个数
var hammingWeight = function(n) {
  let count = 0;
  while(n){
      n = n & (n - 1);
      count++;
  }
  return count;
};