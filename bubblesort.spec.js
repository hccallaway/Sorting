describe('Bubble Sort', function() {
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
