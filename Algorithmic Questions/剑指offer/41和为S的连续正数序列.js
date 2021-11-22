// 和为S的连续正数序列(窗口滑动)
// 时间复杂度是 O(n)。
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