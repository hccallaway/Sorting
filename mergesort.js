// let swap = function(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// let checkSorted = function(arr) {
//   let checkIfSorted = true;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       checkIfSorted = false;
//     }
//   }
//   return checkIfSorted;
// };

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length/2.0)
  let firstHalf = wholeArray.slice(0, middle)
  let secondHalf = wholeArray.slice(middle, wholeArray.length)
  return [firstHalf, secondHalf];
}

function merge(Arr1, Arr2) {
  let sortedArr = []
  if (Arr1[0] <= Arr2[0]) {
    sortedArr.push(Arr2[0])
    Arr1 = Arr1.shift()
  } else {
    sortedArr.push(Arr1[0])
    Arr2 = Arr2.shift()
  }
  return sortedArr
}


// let mergeSort = function(arr) {
//   let isSorted = checkSorted(arr);
//   while (!isSorted) {
//     // split array into single
//     //

//     }
//     isSorted = checkSorted(arr);
//   }
//   return arr;
// };
