// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 时间复杂度0(N)  空间复杂度O(1)
// 三指针法 2指针先加确保位于最后 1指针其次 0指针用时再加
var sortColors = function(nums) {
  let num0 = 0, num1 = 0, num2 = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums[num2++] = 2;
      nums[num1++] = 1;
      nums[num0++] = 0;
    }else if(nums[i] === 1){
      nums[num2++] = 2;
      nums[num1++] = 1;
    }else{
      nums[num2++] = 2;
    }
  }
};



