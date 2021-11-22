var Event = function() {
  this.obj = {};
  this.cacheList = [];
}
Event.prototype.emit = function() {
  const args = arguments;  //函数参数
  const that = this;  //this指向,保持cache函数的this指向
  function cache() {
      var eventType = Array.prototype.shift.call(arg)
      var arr = that.obj[eventType]
      for (let i = 0; i < arr.length; i++) {
        arr[i].apply(arr[i], arg)
      }
  }
  this.cacheList.push(cache)  // 采用闭包，保持对emit函数中参数和that的引用
}
Event.prototype.on = function(eventType,fn) {
  if(!this.obj[eventType]) {
      this.obj[eventType] = []
  }
  this.obj[eventType].push(fn)
  // 在订阅函数中执行emit函数中缓存的函数
  for (let i = 0; i < this.cacheList.length; i++) {
      this.cacheList[i]()
  }
}