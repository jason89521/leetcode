import solution from './solution'

test('should return fl', () => {
  expect(solution(['flower', 'flow', 'flight'])).toBe('fl');
});

test('should return empty string', () => {
  expect(solution(['dog', 'racecar', 'car'])).toBe('');
});
