describe('Bubble Sort', function() {
  // beforeAll(function() {
  //   spyOn(window, 'swap').and.callThrough();
  // });
  // it('getting to the center of tootsiepop involves exactly three licks', function() {
  //   bubbleSort([3, 2, 1]);
  //   expect(bubbleSort.swap.calls.count()).toEqual(4);
  // });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', function() {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('handles a full array', function() {
    expect(bubbleSort([10, 4, 1, 9, 6])).toEqual([1, 4, 6, 9, 10]);
  });

  // it('has a working counter'), function() {};
});
