/** js排序之冒泡与快排 */

var arr = [2,8,6,7,3,5,4,1,0,9];

/** 冒泡排序
 * 共进行arr.length - 1趟
 * （最后一趟即要开始比较的最后一个数不用比较了，
 * 它已经被其他趟挤到该在的位置了），
 * 每一趟比较arr.length - 1 - i次，
 * 因为那i次在上一趟中已经排好序了在该在的位置了，
 * 肯定是前小后大没什么可比较的了，即后面继续比较无意义。
 */

for(var i = 0; i < arr.length - 1; i++) {
  for(var j = 0; j < arr.length - 1 - i; j++) {
    if(arr[j] > arr[j+1]) {
      var temp = arr[j+1];
      arr[j+1] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

/** 快速排序 */

function quicksort(array, left, right) {
  if(left > right) return ; 
  /** 一定要有这个判断，
   * 因为有递归left和i-1，
   * 若没有这个判断条件，该函数会进入无限死错位递归*/
  var i = left,
      j = right,
      jizhun = array[left]; //基准总是取序列开头的元素
  
      while(i !== j) { /**该while的功能为每一趟进行的多次比较和交换最终找到位置k。
        当i==j时意味着找到k位置了 */
        while(array[j] >= jizhun && i < j) { 
          j--;
        }
        /**只要大于等于基准数，
          j指针向左移动直到小于基准数才不进入该while。
          i<j的限制条件也是很重要，不然一直在i!=j这个循环里，j也会越界 */
        while(array[i] < jizhun && i < j) {
          i++;
        }
        /**只要小于等于基准数，
         * i指针向右移动直到大于基准数才不进入该while。
         * 等于条件也是必要的，举例[4,7,6,4,3]验证一下是两个4交换 */
        if(i < j) { //如果i==j跳出外层while
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }

      array[left] = array[i]; //交换基准数和k位置上的数
      array[i] = jizhun;

      quicksort(array, left, i-1);
      quicksort(array, i+1, right);
}
quicksort(arr, 0, arr.length - 1);
console.log(arr);