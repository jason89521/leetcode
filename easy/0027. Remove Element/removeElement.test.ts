import removeElement from './removeElement';

test('should return 2', () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  const expectedNums = [2, 2];

  const k = removeElement(nums, val);

  expect(k).toBe(expectedNums.length);
  const test = nums.slice(0, k).sort();
  for (let i = 0; i < expectedNums.length; i++) expect(test[i]).toBe(expectedNums[i]);
});

test('should return 5', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  const expectedNums = [0, 0, 1, 3, 4];

  const k = removeElement(nums, val);

  expect(k).toBe(expectedNums.length);
  const test = nums.slice(0, k).sort();
  for (let i = 0; i < expectedNums.length; i++) expect(test[i]).toBe(expectedNums[i]);
});

test('should return 0 with empty array', () => {
  const nums = [];
  const val = 2;
  const expectedNums = [];

  const k = removeElement(nums, val);

  expect(k).toBe(expectedNums.length);
  const test = nums.slice(0, k).sort();
  for (let i = 0; i < expectedNums.length; i++) expect(test[i]).toBe(expectedNums[i]);
});

test('should return 0 with all value are target value', () => {
  const nums = [1];
  const val = 1;
  const expectedNums = [];

  const k = removeElement(nums, val);

  expect(k).toBe(expectedNums.length);
  const test = nums.slice(0, k).sort();
  for (let i = 0; i < expectedNums.length; i++) expect(test[i]).toBe(expectedNums[i]);
});
