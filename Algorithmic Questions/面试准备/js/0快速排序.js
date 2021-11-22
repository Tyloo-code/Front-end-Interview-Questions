function quicksort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let pivot = arr.splice(mid, 1);
  let left = [], right = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort([49, 38, 65, 97, 23, 22, 76, 1, 5, 8, 2, 0, -1, 22]));


// 非递归
let quick = (arr, left, right) =>{
  let stack = []; //js中用数组模拟栈
  stack.push(left); //左指针入栈
  stack.push(right); //右指针入栈
  while(stack.length > 0){  //栈不为空时，说明还有序列没有排序好
      let right = stack.pop();//后进先出，栈顶元素出栈，是为待排序列的最右下标（指针）
      let left = stack.pop(); //栈顶元素出栈，是为待排序列的最左下标（指针）
      let index = partition(arr, left, right);  //划分，将待排序列进行一趟快速排序，最终有一个数获得最终位置，其下标为index
      if(left < index - 1){ //将index将待排序列分为两部分
          stack.push(left); //左边那部分左指针入栈
          stack.push(index - 1);//左边那部分右指针入栈
      }
      if(right > index + 1){  //右边部分入栈
          stack.push(index + 1);
          stack.push(right);
      }
  }
  return arr;  //返回数组
}
var partition = (arr, left, right) => {
  let base = arr[left]; //基准值，数组中的第一个数，也可以选择最后一个数，中间的也行。可以优化（第一个，中间，最后一个中中间的那个数）
  while(left < right){ //循环跳出条件，注意不能等于
      while( left < right && base <= arr[right] ){ //从后往前找第一个比基准值小（相等也行）的元素
        /*这里记得left < right这个条件，因为内层循环之后可能出现left>=right现象，如果没有这个条件，那么它可能会执行这个循环。
          * 记住，外层循环的条件只是管能进入外层循环，而不会管内层循环的*/
        right--;
      }
      //这句不能和下面第四句组合互换两个数，因为这里的left还是变，才到第四句
      arr[left] = arr[right]; //比基准值小的元素移动到左端
      while(left < right && base >= arr[left]){  //从前往后找第一个比基准值大的元素   将记住这里的base有等于号
          left++;
      }
      arr[right] = arr[left]; //比基准值大的元素移动到右端
  } 
  arr[left] = base;  //最终left=right，基准元素的最终存放位置
  return left;  //返回基准元素的最终存放位置
}

let arr = [49, 38, 65, 97, 23, 22, 76, 1, 5, 8, 2, 0, -1, 22];
console.log(quick(arr, 0,arr.length -1))
