function flatten(arr, result = []) {
  for (let item of arr) {
      if (Array.isArray(item))
          flatten(item, result)
      else
          result.push(item)
  }
  return result
}

var array = [[1,2,3],4,5,6,[[7]],[]]
var result = flatten(array)

console.log(result)