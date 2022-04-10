import calPoints from './calPoints';

test('should return 30', () => {
  const ops = ['5', '2', 'C', 'D', '+'];
  const output = calPoints(ops);
  expect(output).toBe(30);
});

test('should return 30', () => {
  const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
  const output = calPoints(ops);
  expect(output).toBe(27);
});

test('should return 30', () => {
  const ops = ['1'];
  const output = calPoints(ops);
  expect(output).toBe(1);
});
