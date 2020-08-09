// Recursive function, sum of n numbers example:

function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

sumRange(5); // 15

// factorial of n numbers

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
