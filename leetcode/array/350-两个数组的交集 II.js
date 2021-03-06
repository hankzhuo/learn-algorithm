/**
题目：两个数组的交集 II 

说明：给定两个数组，编写一个函数来计算它们的交集。

示例 1:
 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 输出: [2,2]

示例 2:
 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 输出: [4,9]
*/

// 解法1：借助 HashMap，时间复杂度 O(n + m)，其中 n，m 分别代表了数组的大小；空间复杂度 O(n)
var intersect = function(nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
      if (map.has(n)) {
          map.set(n, map.get(n) + 1)
      } else {
          map.set(n, 1)
      }
  }
  
  let result = [];
  for (const n of nums2) {
      if (map.has(n) && map.get(n) > 0) {
          result.push(n)
          map.set(n, map.get(n) - 1)
      }
  }
  return result
};

// 解法2：排序，时间复杂度 O(nlogn + mlogm)
