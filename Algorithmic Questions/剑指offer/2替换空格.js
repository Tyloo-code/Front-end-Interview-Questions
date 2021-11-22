// 替换空格
function replaceSpace( s ) {
  return s.replace(/ /g,'%20')
}
console.log(replaceSpace("We Are Happy")) 

var replaceSpace = function(s) {
  s = s.split("");
  let oldLen = s.length;
  let spaceCount = 0;
  for(let i = 0; i < oldLen; i++){
    if(s[i] === ' ') spaceCount++;
  }
  s.length += spaceCount * 2;
  for(let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--){
    if(s[i] !== ' ') s[j] = s[i];
    else{
      s[j - 2] = '%';
      s[j - 1] = '2';
      s[j] = '0';
      j -= 2;
    }
  }
  return s.join('');
}