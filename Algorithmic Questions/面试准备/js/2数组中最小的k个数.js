// 快速选择法 时间复杂度O(N)，空间复杂度O(logN) 最小序列不排序
//https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/jian-zhi-offer-40-zui-xiao-de-k-ge-shu-j-9yze/
function getLeastNumbers(arr, k){
  if(k >= arr.length) return arr;
  return quickSort(arr, k, 0, arr.length - 1);
}
function quickSort(arr, k, l, r){
  let i = l,
      j = r;
  while(i < j){
    while(i < j && arr[j] >= arr[l]) j--;
    while(i < j && arr[i] <= arr[l]) i++;
    swap(arr, i, j);
  }
  swap(arr, i, l);
  if(i > k) return quickSort(arr, k, l, i - 1);
  if(i < k) return quickSort(arr, k, i + 1, r);
  return arr.slice(0,k)
}
// 交换函数
function swap(nums, p, q){
  const temp = nums[p];
  nums[p] = nums[q];
  nums[q] = temp;
}