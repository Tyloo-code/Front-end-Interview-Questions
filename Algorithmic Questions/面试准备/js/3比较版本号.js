// 给你两个版本号 version1 和 version2 ，请你比较它们。
// 时间复杂度：O(N+M+max(N,M))。其中 N 和 M 指的是输入字符串的长度。
// 空间复杂度：O(N+M)，使用了两个数组 nums1 和 nums2 存储两个字符串的块。

// 第一步，通过"."来分割字符串，然后分割后形成的字符串数组中的每个元素通过parseInt转成整数，这样我们就得到了两个整数数组
// 第二步，补充数组，为让我们得到正确的结果，我们将两个数组补充成像个等长的数组，给短的push 0
// 第三步，进行比较，从第0位开始比较，如果分出大小直接返回比较结果，如果相等则比较下一位。如果全相等返回0

var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  v1 = v1.map(x => Number(x));
  v2 = v2.map(x => Number(x));
  return compareInt(v1, v2);
};

function compareInt(arr1, arr2){
  let len = Math.max(arr1.length, arr2.length);
  while(arr1.length < len) arr1.push(0);
  while(arr2.length < len) arr2.push(0);
  for(let i = 0; i < len; i++){
    if(arr1[i] > arr2[i]) return 1;
    else if(arr1[i] < arr2[i]) return -1;
  }
  return 0;
}