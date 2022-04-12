import shiftGrid from './shiftGrid';

test('shift 1 time', () => {
  const result = shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  );
  const expected = [
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (let i = 0; i < expected.length; i++) {
    expect(result[i]).toEqual(expected[i]);
  }
});

test('shift 4 time', () => {
  const result = shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  );
  const expected = [
    [12, 0, 21, 13],
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
  ];

  for (let i = 0; i < expected.length; i++) {
    expect(result[i]).toEqual(expected[i]);
  }
});

test('shift 9 time', () => {
  const result = shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    9
  );
  const expected = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (let i = 0; i < expected.length; i++) {
    expect(result[i]).toEqual(expected[i]);
  }
});

test('k > items number', () => {
  const result = shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    19
  );
  const expected = [
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  console.log(result);
  for (let i = 0; i < expected.length; i++) {
    expect(result[i]).toEqual(expected[i]);
  }
});
