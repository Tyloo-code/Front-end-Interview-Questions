// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 方法一
// partition（切分）操作总能排定一个元素，还能够知道这个元素它最终所在的位置，这样每经过一次 partition（切分）操作就能缩小搜索的范围，这样的思想叫做 “减而治之”（是 “分而治之” 思想的特例）。
// 切分过程可以不借助额外的数组空间，仅通过交换数组元素实现。
// 时间复杂度：O(n)，原版快排是O(nlogn)
var findKthLargest = function(nums, k) {
  let len = nums.length;
  let left = 0, 
      right = len - 1;
  let target = len - k;       // 转换一下，第 k 大元素的索引是 len - k
  
  while(true){
    let index = partition(nums, left, right);
    if(index === target) return nums[index];
    else if(index < target) left = index + 1;
    else right = index - 1;
  }
}
/**
     * 在数组 nums 的子区间 [left, right] 执行 partition 操作，返回 nums[left] 排序以后应该在的位置
     * 在遍历过程中保持循环不变量的语义
     * 1、[left + 1, j] < nums[left]
     * 2、(j, i] >= nums[left]
*/
function partition(nums, left, right){
  let pivot = nums[left];
  let j = left;
  for(let i = left + 1; i <= right; i++){
    if(nums[i] < pivot){             // 小于 pivot 的元素都被交换到前面
      j++;
      swap(nums, j, i);
    }
  }
  // 在之前遍历的过程中，满足 [left + 1, j] < pivot，并且 (j, i] >= pivot
  swap(nums, j, left);   
  // 交换以后 [left, j - 1] < pivot, nums[j] = pivot, [j + 1, right] >= pivot
  return j;
}
// 交换函数
function swap(nums, p, q){
  const temp = nums[p];
  nums[p] = nums[q];
  nums[q] = temp;
}


