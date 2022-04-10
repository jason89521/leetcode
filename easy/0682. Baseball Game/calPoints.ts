function calPoints(ops: string[]): number {
  const record: number[] = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+') {
      const length = record.length;
      const val = record[length - 1] + record[length - 2];
      record.push(val);
    } else if (ops[i] === 'D') {
      const val = record[record.length - 1] * 2;
      record.push(val);
    } else if (ops[i] === 'C') {
      record.pop();
    } else {
      record.push(+ops[i]);
    }
  }

  return record.reduce((total, val) => {
    return total + val;
  }, 0);
}

export default calPoints;
