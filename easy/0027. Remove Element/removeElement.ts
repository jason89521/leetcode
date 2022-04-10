function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) count += 1;
    else nums[i - count] = nums[i];
  }

  return nums.length - count;
}

export default removeElement;
