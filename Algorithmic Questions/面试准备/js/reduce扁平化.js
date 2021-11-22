function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
var array = [[1,2,3],4,5,6,[[7]],[]]
var result = flatten(array)

console.log(result)