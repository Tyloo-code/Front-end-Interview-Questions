// 翻转单词顺序
function ReverseSentence(s){
    return s.split(' ').filter(item => item !== '').reverse().join(' ');
}