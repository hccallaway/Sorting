function bubbleSort(arr) {
  let isSorted = false
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       swap(arr, i, j)
  //     }
  //   }
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 1; j < arr.length; j++) {
    if (arr[i] > arr[i+1]) {
      swap(arr, i , i+1)
  }
}
  }
  return arr;
}

let swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// for (let i = 0; i < arr.length-1; i++) {
//   if (arr[i] > arr[i+1]) {
//     let temp = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = temp;
//   }
// }
// return ;
// }
