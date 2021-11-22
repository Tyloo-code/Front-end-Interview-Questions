// 二分查找下标
// 请实现有重复数字的升序数组的二分查找。
// 输出在数组中第一个大于等于查找值的位置，如果数组中不存在这样的数(指不存在大于等于查找值的数)，则输出数组长度加一。
/**
 * 二分查找
 * @param n int整型 数组长度
 * @param v int整型 查找值
 * @param a int整型一维数组 有序数组
 * @return int整型
 */
function upper_bound_( n ,  v ,  a ) {
  if(a[n-1] < v) return n + 1;
  let left = 0, right = n - 1;
  while(left < right){
      let mid = Math.floor((left + right)/2);
      if(a[mid] >= v){
          right = mid;
      }else{
          left = mid + 1;
      }
  }
  return left + 1;
}