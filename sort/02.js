/**
 * @description 归并排序、快速排序
 * 1. 时间复杂度可以 O(n*log(n))
 */

// 归并排序
function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2); // 找到中间值
  let left = arr.slice(0, middle); // 把数组分成左边、右边
  let right = arr.slice(middle);
  // 递归、分解、合并
  return mergeArr(mergeSort(left), mergeSort(right))
}

function mergeArr(left, right) {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // 比较两个数组中元素大小，按从小 -> 大依次插入数组
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] > right[rightIndex]) {
      temp.push(right[rightIndex])
      rightIndex++
    } else {
      temp.push(left[leftIndex])
      leftIndex++;
    }
  }
  // 合并 left、right 剩余部分元素
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

var arr = [ 23, 2, 15, 4, 3, 20, 50 ];
mergeSort(arr);

// 归并排序步骤：
  // 1. 把一个数组从中间分为前后两部分，从而对前后两部分分别进行排序，再将排好的部分合并在一起
  // 2. 分治是一种解决问题的思想，递归是一种编程技巧
// 归并排序总结：
  // 1. 稳定排序算法
  // 2. 时间复杂度：O(nlogn)，最好情况、最坏情况、平均情况都是 O(nlogn)
  // 3. 不是原地排序算法，需要额外的空间，空间复杂度 O(n)



// 快速排序
function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1) // 担心越界
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
}

function partition(arr, pivot, left, right) {
  let pivotVal = arr[pivot]
  let startIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, startIndex, i)
      startIndex++
    }
  }
  // 最后交换 startIndex 与 right 的值
  swap(arr, startIndex, right)
  return startIndex
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp;
}

var arr = [ 23, 2, 15, 4, 3, 20, 50 ];
quickSort(arr, 0, arr.length - 1);
console.log(arr)

// 快速排序步骤：
  // 1. 如果数组中下标是 p ~ r 之间的一组数据，选择 p ~ r 之间的任意一个数据作为 pivot（区分点）
  // 2. 遍历 p ~ r 之间数据，小于 pivot 的数放在左边，大于 pivot 的数据放在右边
  // 3. 根据区分 pivot 区分左右两边，递归
// 快速排序总结：
  // 1. 时间复杂度 O(nlogn)
  // 2. 不是稳定排序
  // 3. 原地排序，空间复杂度为 O(1)