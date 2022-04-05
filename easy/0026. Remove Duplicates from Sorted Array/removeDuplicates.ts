function removeDuplicates(nums: number[]): number {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) count += 1;
    else nums[i - count] = nums[i];
  }

  nums.splice(nums.length - count, count);

  return nums.length;
}

export default removeDuplicates;
