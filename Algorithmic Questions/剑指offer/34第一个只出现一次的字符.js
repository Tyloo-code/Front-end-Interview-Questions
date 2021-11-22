// 第一个只出现一次的字符(返回字符)
var firstUniqChar = function(s) {
  for (let char of new Set(s)) {
    if (s.match(new RegExp(char, 'g')).length === 1) {
      return char;
    }
  }
  return ' ';
};

// 第一个只出现一次的字符(返回位置)
function FirstNotRepeatingChar(str){
  for(let i=0;i<str.length;i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        return i;
        // return str[i];
    }
  }
  return -1;
  // return ' ';
}