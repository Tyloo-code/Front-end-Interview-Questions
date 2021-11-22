// 数组中的逆序对
// 这题的正确解法是要借助归并排序的思路，在归并的过程中，快速统计逆序对。这种解法比较难想到，但是应用归并排序的题目真的不多，所以这题很有研究和收藏意义。
var reversePairs = function(nums) {
  let sum = 0;            // 定义变量存储逆序对的数量
  mergeSort(nums);        // 归并排序的返回结果赋值给sum
  return sum;
  // 归并排序函数(分)
  function mergeSort (nums) {
    if(nums.length < 2) return nums;                        // 一个元素的时候，我们返回这个数组，即递归的结束条件
    let mid = Math.floor(nums.length / 2);                  // 如果数组的长度不小于2，说明还没有分彻底 ，下面继续分
    let left = nums.slice(0, mid);                          // 左边的子数组
    let right = nums.slice(mid);                            // 右边的子数组
    return merge(mergeSort(left), mergeSort(right));    // 将拆分好的左右子数组投入到合并函数中
  }
  // 合并函数（用户将拆分好的子数组进行合并）
  function merge(left, right) {
    const res = [];                   // 定义一个存储合并排好顺序的总数组（包含左右子数组的）
    const leftLen = left.length;
    const rightLen = right.length;
    // 开始循环遍历，是以res的下标为基础进行遍历的(i是左子数组的下标，j是右子树组的下标，index是res的下标)
    for(let i = 0, j = 0, index = 0; index < leftLen + rightLen; index++) {
      if(i >= leftLen) res.push(right[j++]); // 如果i越界说明，左子数组已经遍历完，此时res直接添加右子数组的下标指向的元素即可
      else if(j >= rightLen) res.push(left[i++]); // 如果j越界，说明右子数组已经遍历完了，此时res直接添加左子数组下标指向的元素即可
      else if(left[i] <= right[j]) res.push(left[i++]);  // 如果左子数组下标指向的元素小于等于右子数组下标指向的元素，此时不存在逆序对，将左子数组对应的结果加到res数组即可
      else {
        res.push(right[j++]); // 如果左子数组下标指向的元素大于右子数组下标指向的元素，此时是存在逆序对的
        sum += leftLen - i;
      }
    }
    return res; 
  }
};