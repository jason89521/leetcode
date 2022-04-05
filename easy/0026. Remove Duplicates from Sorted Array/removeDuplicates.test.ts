import removeDuplicates from './removeDuplicates';

test('with duplicate numbers', () => {
  const nums = [1, 1, 2, 2, 3, 3];
  const expectedNums = [1, 2, 3];
  const k = removeDuplicates(nums);

  expect(k).toBe(expectedNums.length);
  expect(nums).toEqual(expectedNums);
});

test('with no duplicates', () => {
  const nums = [1, 2, 3];
  const expectedNums = [1, 2, 3];
  const k = removeDuplicates(nums);

  expect(k).toBe(expectedNums.length);
  expect(nums).toEqual(expectedNums);
});

test('empty array', () => {
  const nums = [];
  const expectedNums = [];
  const k = removeDuplicates(nums);

  expect(k).toBe(expectedNums.length);
  expect(nums).toEqual(expectedNums);
});
