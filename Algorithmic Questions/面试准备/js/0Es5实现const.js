var _const = {};
Object.defineProperty(_const, "A", {
    value: 1,
    writable: false, //设置属性只读
    configurable: false, //是否可删除
    enumerable: false    //是否可枚举
});
console.log(_const.A);  //1

/*全局挂载
var __const = function __const (data, value) {
  window.data = value // 把要定义的data挂载到window下，并赋值value
  Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符
    enumerable: false,
    configurable: false,
    get: function () {
      return value
    },
    set: function (data) {
      if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
        throw new TypeError('Assignment to constant variable.')
      } else {
        return value
      }
    }
  })
}
__const('a', 10)      
console.log(a)
*/