var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 || j >= 0) {
      if(i < 0) nums1[k--] = nums2[j--];
      else if(j < 0) nums1[k--] = nums1[i--];
      else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
      else nums1[k--] = nums1[i--];
  }
  return nums1;
};

