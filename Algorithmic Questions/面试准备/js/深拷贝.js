// 方法一
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return copy;
}

var obj = {name: 'jack', birth: {year: '1997', month: '10'}}
var obj1 = deepClone(obj)
obj.birth.year = '1234'
// test
console.log(obj1) // {name: 'jack', birth: {…}}




// 方法三 JSON.parse json转对象    JSON.stringify 对象转json
function deepClone2(obj){
  return JSON.parse(JSON.stringify(obj));
}