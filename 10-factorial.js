function factorial(n) {
  if (isNaN(n) || n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

const n = parseInt(process.argv[2]);
console.log(factorial(n));
