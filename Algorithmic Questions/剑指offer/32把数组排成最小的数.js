// 把数组排成最小的数
// sort 返回 -1 代表第一个数小
// sort 返回 1 代表第一个数大
var minNumber = function(numbers) {
  numbers.sort((a, b) => {
      const s1 = a + "" + b;
      const s2 = b + "" + a;
      if (s1 < s2) return -1;   // 表示 'ab' < 'ba'，即 a < b ，a 在 b 前边
      if (s1 > s2) return 1;    // 表示 'ab' > 'ba'，即 a > b ，a 在 b 后边
      return 0;
  });
  return numbers.join("");
};


// 方法二
function minNumber(nums) {
	quickSort(nums, 0, nums.length - 1)
	return nums.join('')
}
// ! 该题其实考查的就是排序 但是对比大小的条件变了  数字的话根据大小来比
// ! 把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个  满足这种对比是根据 a+b 和 b+a的比较 决定排序位置
function quickSort(nums, l, r) {
	if (l >= r) return
	let i = l,
		j = r
	tmp = nums[i]
	const pivot = l
	while (i < j) {
		while ('' + nums[j] + nums[pivot] - ('' + nums[pivot] + nums[j]) >= 0 && i < j) j--
		while ('' + nums[i] + nums[pivot] - ('' + nums[pivot] + nums[i]) <= 0 && i < j) i++
		tmp = nums[i]
		nums[i] = nums[j]
		nums[j] = tmp
	}
	nums[i] = nums[pivot]
	nums[pivot] = tmp
	quickSort(nums, l, i - 1)
	quickSort(nums, i + 1, r)
}
