// 顺时针打印矩阵
// 时间复杂度：O(mn)，其中 m 和 n 分别是输入矩阵的行数和列数。矩阵中的每个元素都要被访问一次。
// 空间复杂度：O(1)。除了输出数组以外，空间复杂度是常数。
function printMatrix(matrix)
{
  if(matrix.length === 0) return [];
  const res = [];
  let top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;  //初始化变量
  while(top <= bottom && left <= right){          //当上不超过下 左不超过右时
    for(let i = left; i <= right; i++) res.push(matrix[top][i]);        //遍历上边一行
    top++;
    for(let i = top; i <= bottom; i++) res.push(matrix[i][right]);      //遍历右边一行
    right--;
    
    if(top > bottom || left > right) break;       //超过边界退出

    for(let i = right; i >= left; i--) res.push(matrix[bottom][i]);     //遍历下边一行
    bottom--;
    for(let i = bottom; i >= top; i--) res.push(matrix[i][left]);       //遍历左边一行
    left++;
  } 
  return res;
}