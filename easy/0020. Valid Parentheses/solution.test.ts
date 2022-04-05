import solution from './solution';

test('valid string', () => {
  expect(solution('[]')).toBe(true);
  expect(solution('{}()[]')).toBe(true);
  expect(solution('{[([])]}')).toBe(true);
});

test('inValid string', () => {
  expect(solution('[{]}')).toBe(false);
  expect(solution('{}}')).toBe(false);
  expect(solution('((]]')).toBe(false);
  expect(solution('(')).toBe(false);
});
