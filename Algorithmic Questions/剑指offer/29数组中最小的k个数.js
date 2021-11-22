// 数组中最小的k个数   
// 时间复杂度是O(NlogN)，空间复杂度是O(logN)。排序
function GetLeastNumbers_Solution(input, k)
{
  const arr = input.sort((a, b) => a - b)
  return k > arr.length ? [] : arr.slice(0, k)
}

// 快速选择法 时间复杂度O(N)，空间复杂度是O(logN)
function GetLeastNumbers_Solution(input, k){
    if(input.length == 0 || k > input.length) return [];
    quickSort(input, 0, input.length - 1);
    return input.slice(0, k);
}
function quickSort(input, left, right){
    if(left >= right) return;
    let i = left, j = right;
    while(i < j){
        while(i < j && input[j] >= input[left]) j--;
        while(i < j && input[i] <= input[left]) i++;
        [input[i], input[j]] = [input[j], input[i]];          // 根据基准交换大小，左小右大
    }
    [input[left], input[i]] = [input[i], input[left]];        //交换基准
    quickSort(input, left, i-1);
    quickSort(input, i+1, right);
}
