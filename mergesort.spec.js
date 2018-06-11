describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Merge sort function', function() {
  it('sorts an array of one', function() {
    // test the merging algorithm
    expect(mergeSort([9])).toEqual([9]);
  });
});

describe('Merge sort function', function() {
  it('sorts an array of multiple elements', function() {
    // test the merging algorithm
    expect(mergeSort([9, 23, 4, 11, 10, 7])).toEqual([4, 7, 9, 10, 11, 23]);
  });
});
