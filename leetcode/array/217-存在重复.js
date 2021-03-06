/**
题目：存在重复 
说明：给定一个整数数组，判断是否存在重复元素。如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
    输入: [1,2,3,1]
    输出: true
示例 2:
    输入: [1,2,3,4]
    输出: false
示例 3:
    输入: [1,1,1,3,3,4,3,2,4,2]
    输出: true
*/

// 暴力解法：时间复杂度 (O)^2 
var containsDuplicate = function(nums) {
    let result = false;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                result = true;
                break;
            }
        }
    }
    return result;
};

// 方法2：借助对象或 HashMap，时间复杂度 O(n)，空间复杂度 O(n)
var containsDuplicate = function(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        // 如果这个对象存在某个值的属性，则值 + 1，否则设为 1
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if (obj[nums[i]] > 1) return true;
    }
    return false;
}