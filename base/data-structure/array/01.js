/**
 * @description 数组
 * 数组是一种线性数据结构，它用一组连续的内存空间，来存储数据。
 * 1. 计算机会给每个内存单元分配一个地址，计算机通过地址来访问内存中的数据。
 * 2. 公式：a[i]_address = base_address + i * data_type_size，数组可以通过下标 i 来查找到某个元素。
 * 
 * 低效的插入和删除
 *  1）	插入：从最好 O(1) 最坏 O(n) 平均 O(n)，最好插入是末尾插入，最坏插入是数组头部，因为要搬移数据，往后推一位
 *  2）	插入优化：数组若无序，插入新的元素时，可以将第 K 个位置元素移动到数组末尾，把新的元素，插入到第k个位置，此处复杂度为 O(1)
 *  3）	删除：从最好 O(1) 最坏 O(n) 平均 O(n)，最好删除是末尾删除，最坏删除是数组头部
 *  4）	删除优化：多次删除集中在一起，提高删除效率
 *  记录下已经被删除的数据，每次的删除操作并不是搬移数据，只是记录数据已经被删除，当数组没有更多的存储空间时，再触发一次真正的删除操作。即JVM标记清除垃圾回收算法。
 */