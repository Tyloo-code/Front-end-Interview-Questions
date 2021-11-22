function filter(arr, filterCallBack) {
  //检查传入的参数是否正确(第一个参数是否是数组,数组长度不为0,第二个参数是否是function)
  if (!Array.isArray(arr) || !arr.length || typeof filterCallBack !== 'function') {
      return []
  } else {
      let result = [];
      for (let i = 0, len = arr.length; i < len; i++) {
          //对数组中的每个元素进行检查，符合条件就放到返回的数组中
          if (filterCallBack(arr[i]))
              result.push(arr[i])
      }
      return result;
  }
}


var arr = [1, 2, 3]
var res = filter(arr, (item) => {
  return item > 2
})
console.log(res);