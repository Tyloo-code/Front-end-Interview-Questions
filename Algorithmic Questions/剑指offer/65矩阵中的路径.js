// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。

// M,N 分别为矩阵行列大小， K 为字符串 word 长度。
// 时间复杂度 O(3^K*MN)  空间复杂度 O(K)
// 深度优先
function hasPath( matrix ,  word ) {
  let row = matrix.length;
  let col = matrix[0].length;
  let dfs = function(i, j, matrix, word, index){
    if(i<0 || i>=row || j<0 || j>col || matrix[i][j] !== word[index]) return false;// 判断不符合条件
    if(index === word.length - 1) return true;  // word遍历完了
    let tmp = matrix[i][j];                     // 记录到board的值
    matrix[i][j] = '';                         // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
    let res = dfs(i-1, j, matrix, word, index+1) || dfs(i+1, j, matrix, word, index+1) || 
              dfs(i, j-1, matrix, word, index+1) || dfs(i, j+1, matrix, word, index+1)
    matrix[i][j] = tmp;                         // 恢复现场
    return res;
  }
  // 遍历整个board，找到初始位置点
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(dfs(i, j, matrix, word, 0 )) return true
    }
  }
  // 没找到
  return false;
}

