console.log = (function(oriLogFunc){
  return function(str)
  {
      oriLogFunc.call(console,"hello:"+str);
  }
})(console.log);
console.log("userName");