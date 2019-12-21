/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
*/

// 动态规划
var climbStairs = function(n) {
  if (n === 1) return 1;
  
  var dp = new Array(n + 1);
  dp[1] = 1;  // 第 1 阶，有 1 种走法
  dp[2] = 2;  // 第 2 阶，有 2 种走法
  
  // 第 3 阶方法等于第 2 阶方法 + 第 1 阶方法之和
  // 以此类推，所以到达第 i 阶的方法总数就是到第 (i-1) 阶和第 (i-2) 阶的方法数之和
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
};