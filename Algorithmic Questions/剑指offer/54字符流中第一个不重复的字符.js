// 字符流中第一个不重复的字符
let map = {};
function Init(){
    map = {};
}
function Insert(ch){
    map[ch] = map[ch] ? map[ch] + 1 : 1;
}
function FirstAppearingOnce(){
    for(const i in map){
      if(map[i] === 1) return i;
    }
    return '#'
}