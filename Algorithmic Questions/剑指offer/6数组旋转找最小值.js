// 数组有序旋转 找最小值
//  双指针
function minNumberInRotateArray(rotateArray) {
  let left = 0,
      right = rotateArray.length - 1;
  while(left < right){
    // Math.floor 等价于 ~~ 双取反去掉小数部分
    let middle = left + Math.floor((right - left) / 2);
    if(rotateArray[middle] > rotateArray[right]) left = middle + 1;
    else if(rotateArray[middle] < rotateArray[right]) right = middle;
    else right--;
  }
  return rotateArray[left];
}



// 暴破【不推荐】
function minNumberInRotateArray(numbers) {
  for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < numbers[0]){
          return numbers[i];
      }
  }
  return numbers[0];
}

