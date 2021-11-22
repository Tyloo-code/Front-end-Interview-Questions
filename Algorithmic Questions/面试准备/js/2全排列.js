// 时间复杂度：O(n×n!)
// 空间复杂度：O(n)
const permute = nums => {
  const res = [];
  const used = [];
  function dfs(path){
    if(path.length === nums.length){
      res.push([...path]);
      return;
    }
    for(const num of nums){
      if(used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  dfs([]);
  return res;
}

console.log(permute([1,2,3]));