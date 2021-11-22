// 左旋转字符串
function LeftRotateString(str, n){
  return str ? str.slice(n) + str.slice(0,n) : ''   
}