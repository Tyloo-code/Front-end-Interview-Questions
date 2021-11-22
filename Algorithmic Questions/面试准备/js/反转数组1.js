var array = [10,20,30,40,50]
for (var i=0;i<array.length/2;i++){
  [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
}

console.log(array)