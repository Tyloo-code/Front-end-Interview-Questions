// 给你一个字符串 s，找到 s 中最长的回文子串。

// 两种情况
// 一种是回文子串长度为奇数（如aba，中心是b）
// 另一种回文子串长度为偶数（如abba，中心是b，b）
// 循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断

var longestPalindrome = function(s) {
  if(s < 2) return s;
  let res = '';
  for(let i = 0; i < s.length; i++){
    helper(i, i);        // 回文子串长度是奇数
    helper(i, i + 1);    // 回文子串长度是偶数
  }
  function helper(m, n){
    while(m >= 0 && n < s.length && s[m] === s[n]){
      m--; 
      n++;
    }
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if(n - m - 1 > res.length){
      res = s.slice(m + 1, n);
    }
  }
  return res;
};