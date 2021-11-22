var obj = {   //原数据，包含字符串、对象、函数、数组等不同的类型
  name:"test",
  main:{
      a:1,
      b:2
  },
  fn:function(){
      
  },
   friends:[1,2,3,[22,33]]
}

function copy(obj){
   let newobj = null;   //声明一个变量用来储存拷贝之后的内容
   
//判断数据类型是否是复杂类型，如果是则调用自己，再次循环，如果不是，直接赋值即可，
//由于null不可以循环但类型又是object，所以这个需要对null进行判断
   if(typeof(obj) == 'object' && obj !== null){ 
   
//声明一个变量用以储存拷贝出来的值,根据参数的具体数据类型声明不同的类型来储存
       newobj = obj instanceof Array? [] : {};   
       
//循环obj 中的每一项，如果里面还有复杂数据类型，则直接利用递归再次调用copy函数
       for(var i in obj){  
           newobj[i] = copy(obj[i])
       }
   }else{
       newobj = obj
   }    
 return newobj;    //函数必须有返回值，否则结构为undefined
}

var obj2 = copy(obj)
obj2.name = '修改成功'
obj2.main.a = 100
console.log(obj,obj2)

//解决循环调用
function deepClone( originObj, map = new WeakMap() ) {
  if(!originObj || typeof originObj !== 'object') return originObj;  //空或者非对象则返回本身

  //如果这个对象已经被记录则直接返回
  if( map.get(originObj) ) {
      return  map.get(originObj);
  }
  //这个对象还没有被记录，将其引用记录在map中，进行拷贝    
  let result = Array.isArray(originObj) ? [] : {};  //拷贝结果
  map.set(originObj, result); //记录引用关系
  let keys = Object.keys(originObj); //originObj的全部key集合
  //拷贝
  for(let i =0,len=keys.length; i<len; i++) {
      let key = keys[i];
      let temp = originObj[key];
      result[key] = deepClone(temp, map);
  }
  return result;
}

