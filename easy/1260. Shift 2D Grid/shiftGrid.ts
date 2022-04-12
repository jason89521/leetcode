function shiftGrid(grid: number[][], k: number): number[][] {
  const n = grid[0].length;
  let flatGrid = grid.flat();
  k = k % flatGrid.length;
  const deleted = flatGrid.splice(flatGrid.length - k, k);
  flatGrid = [...deleted, ...flatGrid];

  const result: number[][] = [];
  while (flatGrid.length > 0) {
    result.push(flatGrid.splice(0, n));
  }

  return result;
}

export default shiftGrid;
