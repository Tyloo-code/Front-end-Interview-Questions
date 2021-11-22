function unique(arr) {
  const res = new Map()
  return arr.filter( item => !res.has(JSON.stringify(item)) && res.set(JSON.stringify(item), 1))
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))