let swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let checkSorted = function(arr) {
  let checkIfSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      checkIfSorted = false;
    }
  }
  return checkIfSorted;
};

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}

let mergeSort = function(arr) {
  let isSorted = checkSorted(arr);
  while (!isSorted) {
    // split array into single
    //
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    isSorted = checkSorted(arr);
  }
  return arr;
};
