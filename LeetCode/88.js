//https://leetcode.com/problems/merge-sorted-array/description/

var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let res = [];
  
    if (n == 0) {
      for (let i = 0; i < m; i++) {
        res.push(nums1[i]);
      }
    } else if (m == 0) {
      for (let i = 0; i < n; i++) {
        res.push(nums2[i]);
      }
    } else {
      while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
          res.push(nums1[i]);
          i++;
        } else {
          res.push(nums2[j]);
          j++;
        }
      }
      while (i < m) {
        res.push(nums1[i]);
        i++;
      }
      while (j < n) {
        res.push(nums2[j]);
        j++;
      }
    }
  
    for (let i = 0; i < res.length; i++) {
      nums1[i] = res[i];
    }
  };