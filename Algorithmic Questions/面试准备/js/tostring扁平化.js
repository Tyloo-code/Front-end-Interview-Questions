function flatten(arr){
  let str = arr.toString()
  return str.split(',')
}
var array = [[1,2,3],4,5,6,[[7]],[]]
var result = flatten(array)

console.log(result)