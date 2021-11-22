var newArray = [{
  name: "aaa",
  value: 0
},
{
  name: "ddd",
  value: 3
},
{
  name: "bbb",
  value: 1
},
{
  name: "eee",
  value: 4
},
{
  name: "ccc",
  value: 2
}];
function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}
console.log(newArray.sort(compare("value")))