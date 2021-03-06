/**
题目：旋转数组 
说明：给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
  输入: [1,2,3,4,5,6,7] 和 k = 3
  输出: [5,6,7,1,2,3,4]
解释:
  向右旋转 1 步: [7,1,2,3,4,5,6]
  向右旋转 2 步: [6,7,1,2,3,4,5]
  向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
  输入: [-1,-100,3,99] 和 k = 2
  输出: [3,99,-1,-100]
解释: 
  向右旋转 1 步: [99,-1,-100,3]
  向右旋转 2 步: [3,99,-1,-100]
*/


// 暴力解法：时间复杂度 O(n * k)。每个元素都被移动 1 步（O(n)） k次（O(k)）
var rotate = function(nums, k) {
  k = k % nums.length // 减少了很多不必要的颠倒，因为颠倒一遍数组等于没调换位置
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
};

// 解法 2：使用一个变量保存当前替换的元素
// 复杂度分析：时间复杂度：O(n)，只遍历了每个元素一次。空间复杂度：O(1)，使用了常数。
var rotate = function(nums, k) {
  k = k % nums.length
  let count = 0;
  
  for (let start = 0; count < nums.length; start++) {
      let current = start;
      let prev = nums[current];
      
      do {
          let next = (k + current) % nums.length; // 每个元素移动后，正确的位置
          let temp = nums[next]; // 临时变量

          nums[next] = prev;
          prev = temp;
          current = next;
         
          count++;
      } while (start !== current)
  }
};