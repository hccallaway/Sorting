// let swap = function(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// function checkSorted(arr) {
//   let checkIfSorted = true;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       checkIfSorted = false;
//     }
//   }
//   return checkIfSorted;
// }

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length / 2.0);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let sortedArr = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else {
      sortedArr.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }
  return sortedArr;
}

// Base case: if an array is one element, it is sorted
// Recursive case: split the array and merge sort each half. Then merge these two halves into a sorted whole

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    merge(split(arr));
  }
  return arr;
}
