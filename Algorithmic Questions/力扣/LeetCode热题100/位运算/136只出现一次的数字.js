// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 异或解法：异或运算满足交换律，a^b^a=a^a^b=b,因此ans相当于nums[0]^nums[1]^nums[2]^nums[3]^nums[4]..... 然后再根据交换律把相等的合并到一块儿进行异或（结果为0），然后再与只出现过一次的元素进行异或，这样最后的结果就是，只出现过一次的元素（0^任意值=任意值）
// Time: O(n) Space: O(1)
var singleNumber = function(nums) {
  let ans = nums[0];
  for(let i = 1; i < nums.length; i++){
    ans = ans ^ nums[i];
  }
  return ans;
};
// -----------------------------------------------------------------

//法1 排序后 前后比较
nums.sort((a,b) => a - b);
for(let i = 0; i < nums.length; i++){
    if(nums[i-1] !== nums[i] && nums[i] !== nums[i+1]) return nums[i];
}

//法2 利用map
let map = new Map();
nums.forEach(item =>{
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
})
for(let [key, val] of map.entries()){
    if(val === 1) return key;
}

//法3 异或运算 
return nums.reduce((pre,cur) => pre ^ cur);

