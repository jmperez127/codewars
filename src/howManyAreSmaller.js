function smaller(nums) {
  return nums.map((n, i) => {
    let count = 0;
    nums.slice(i).map((n2) => { if(n2 < n) count++});
    return count;
  });
}

export default smaller;