// 两数之和
function twoSum( numbers ,  target ) {
  const map = new Map();
  for(let i=0; i<numbers.length; i++){
    if(map.has(target - numbers[i])) {
        return [map.get(target - numbers[i]) + 1, i + 1]
    }else{
        map.set(numbers[i],i)
    }
 }
}