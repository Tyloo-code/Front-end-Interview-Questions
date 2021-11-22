// 构建乘积数组
// 时间复杂度 O(N)： 其中 NN 为数组长度，两轮遍历数组 aa ，使用 O(N) 时间。
// 空间复杂度 O(1)： 变量 tmptmp 使用常数大小额外空间（数组 bb 作为返回值，不计入复杂度考虑）。

function multiply(array) {
  if (array === null || array.length === 0)  return array;
    // 先乘这个数的左边，在成这个数的右边，最后相成，避免掉当前数
    let n = array.length;
    let res = new Array(n);
    res[0] = 1;
    for(let i = 1; i < n; i++){             //当前元素左边的所有元素乘积（不包含当前元素）
      res[i] = res[i - 1] * array[i - 1];
    }
    let right = 1;                          //right表示当前元素右边所有元素的乘积（不包含当前元素）,
    for(let i = n - 1; i >= 0; i--){
      res[i] *= right;                      //res[i]表示的是左边的乘积，他俩相乘就是除了自己以外数组的乘积
      right *= array[i];
    }
    return res;
}
