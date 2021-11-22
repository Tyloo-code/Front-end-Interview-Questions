function* flat(arr) {
  for (let item of arr) {
      if (Array.isArray(item))
          yield* flat(item)
      else
          yield item
  }
}

function flatten(arr) {
  let result = []
  for (let val of flat(arr)) {
      result.push(val)
  }
  return result
}
var array = [[1,2,3],4,5,6,[[7]],[]]
var result = flatten(array)

console.log(result)