// 正则表达式匹配
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
function match( str ,  pattern ) {
  // let pat = new RegExp('^' + pattern + '$', 'g');
  // return pat.test(str);
  let m = str.length + 1, n = pattern.length + 1;
  let dp = Array.from({length: m + 1},x => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for(let j = 2; j < n; j += 2){
    dp[0][j] = dp[0][j-2] && pattern.charAt(j-1) === '*';
  }
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      dp[i][j] = pattern.charAt(j-1) === '*' ? 
      dp[i][j-2] || dp[i-1][j] && (str.charAt(i-1) === pattern.charAt(j-2) || pattern.charAt(j-2) === '.') 
      : dp[i-1][j-1] && (pattern.charAt(j-1) === '.' || str.charAt(i-1) === pattern.charAt(j-1));
    }
  }
  return dp[m-1][n-1]
}
