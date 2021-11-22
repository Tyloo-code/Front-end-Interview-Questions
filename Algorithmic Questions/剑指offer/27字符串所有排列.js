// 字符串的排列
function Permutation(str)
{
  const res = new Set();
  const visit = [];
  function dfs(path){
    if (path.length === str.length) return res.add(path);     //结束条件，如果当前选择字符串和题目给定字符串的长度一致则结束。
    for(let i = 0; i < str.length; i++){
      if(visit[i]) continue;       //过滤掉已经选择的。
      visit[i] = true;             //做出选择
      dfs(path + str[i]);          // 进入下一层， 需要注意path这里也是做了选择和回退选择，因为是直接path + chars[i]，等递归结束之后path还是path，默认也就做了回退，比较取巧。
      visit[i] = false;            //回退选择
    }
  }
  dfs('');
  return [...res]
}
