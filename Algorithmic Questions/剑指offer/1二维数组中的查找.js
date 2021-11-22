// 二维数组中的查找
function Find(target, array)
{
   let i = array.length - 1, 
       j = 0;
   while(i >= 0 && j < array[0].length){
     if(array[i][j] > target) i--;
     else if(array[i][j] < target) j++;
     else return true;
   }
   return false;
}

console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))