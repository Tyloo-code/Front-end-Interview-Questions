function str2num(str) {
  var strArr = str.split('')
  var strArrNum = strArr.map(function (str) {
    return +str
  })
  
  var num = strArrNum.reduce(function (x, y) {
    return x * 10 + y
  })
  
  return num
  
}
str2num('123')

console.log(str2num('123'))   