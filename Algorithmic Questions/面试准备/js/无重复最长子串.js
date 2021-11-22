// 1、转换成大写：toUpperCase()
// 2、转换成小写：toLowerCase()
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function(s) {
  let map = new Map();  // 存储下标
  let index = -1, res = 0;
  for(let j = 0; j < s.length; j++){
    if(map.has(s[j])){  //有相同字符
      index = Math.max(index, map.get(s[j]));
    }
    map.set(s[j], j);   //无相同字符
    res = Math.max(res, j - index); //当前坐标 - 上次开头字母
  }
  return res;
}