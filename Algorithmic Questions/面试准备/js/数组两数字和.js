function sameSum(arr, num){
  for (var i =0 ;i<arr.length;i++){
      for (var j = i+1;j<arr.length;j++){
          if (arr[i]+arr[j]==num){
              console.log('数组中两个元素和为'+num+'的两个数为：'+arr[i]+'和'+arr[j]);
              break;
          }
          //break;
          //如果只要输出一组这样的组合就只要在内层循环里break就可以
      }
  }
}
var arr =[1,2,3,4];
sameSum(arr,5);
