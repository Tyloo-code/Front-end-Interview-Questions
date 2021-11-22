// 数字在升序数组中出现的次数
// 时间复杂度O(N),空间复杂度 O(N)
function GetNumberOfK(data, k)
{
  let index = 0
  for(let i = 0 ; i < data.length ; i++){
    if(data[i] == k) index++;
  }
  return index;
}




// 时间复杂度O(logN),空间复杂度 O(1) 
function GetNumberOfK(data, k)
{
  if(!data.length) return 0;
  let left = 0, right = data.length - 1;
  while(left < right){
    let mid = Math.floor((left + right) / 2);
    if(data[mid] >= k) right = mid;
    else left = mid + 1;
  }
  while(data[right] === k) right++;
  return right - left;
}