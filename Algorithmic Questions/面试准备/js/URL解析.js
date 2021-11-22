var url="http://www.baidu.com/we/index.html?id=898602B8261890349226&aaa=123&ccc=456";
// 字符串法
var transform = function(str){
    var obj = new Object, 
    // 截取数据字符串
    data=str.slice(str.indexOf("?"),str.length),
    // 将数据字符串表现为数组
    aParams = data.substr(1).split("&");
    for (i = 0; i < aParams.length; i++) {
      // 根据等号将数组 拆分成 多个键值对数组
　　  var aParam = aParams[i].split("=");
      // 使用属性括号进行属性赋值
      var [name, value] = aParam;
      // 键值对重复
      if (obj[name] === undefined) {
        obj[name] = value;
      } else {
        obj[name] = [].concat(value, obj[name])
      }
    }
    console.log(obj);
    //return obj;
}
transform(url);


 

// 正则法
// const transformUrl = (str) => {
//   const result = {};
//   const reg = /[?&][^?&]+=[^?&]+/g;
//   const found = str.match(reg);
//   if(found){
//     found.forEach(item => {
//       let temp = item.substr(1).split('=');
//       let key = temp[0];
//       let value = temp[1];
//       result[key] = value;
//     })
//   }
//   console.log(result);
// };
// transformUrl(url);

// tx笔试
// var transform = function (str) {
//   // 创建目标对象
//   let str0 = str.split(' ')[0];
//   let str1 = str.split(' ')[1];
//   var REQUEST = new Object,
//     // 截取数据字符串
//     data = str0.slice(str0.indexOf("?"), str0.length),
//     // 将数据字符串表现为数组
//     aParams = data.substr(1).split("&");
//   for (i = 0; i < aParams.length; i++) {
//     // 根据等号将数组 拆分成 多个键值对数组
//     var aParam = aParams[i].split("=");
//     // 使用属性括号进行属性赋值
//     REQUEST[aParam[0]] = aParam[1]
//     if (aParam[0] === str1) {
//       console.log(REQUEST[aParam[0]]);
//       break;
//     }
//     if(i === aParams.length - 1){
//       console.log(null);
//     }
//   }
// }
// transform(url);