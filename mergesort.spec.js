describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
      expect(split([1,2,3,4,5,6])).toEqual([[1,2,3], [4,5,6]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(split([1,2,3],[4,5,6])).toEqual([[1,2,3,4,5,6]]);
  });
});
