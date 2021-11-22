// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let i = -1, res = 0;
  for(let j = 0; j < s.length; j++) {
    if(map.has(s[j])){
      i = Math.max(i, map.get(s[j]));
    }
    map.set(s[j], j);
    res = Math.max(res, j - i);
  }
  return res;
};