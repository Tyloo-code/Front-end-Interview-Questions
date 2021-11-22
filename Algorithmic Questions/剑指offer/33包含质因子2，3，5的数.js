// 丑数
// 时间复杂度是O(N)，空间复杂度是O(N)
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