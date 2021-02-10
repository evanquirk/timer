const nums = process.argv.slice(2);

const timer = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0 && !isNaN(nums[i])) {
      setTimeout(() => {
        process.stdout.write('.');
      }, nums[i] * 1000);
    }
  }
};

timer(nums);