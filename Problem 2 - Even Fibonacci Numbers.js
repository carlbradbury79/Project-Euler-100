function fiboEvenSum(n) {
  let fib = [1, 2];
  let evenFib = [2];
  let current = 1;
  while (current !== n - 1) {
    let newFib = fib[current] + fib[current - 1];
    fib.push(newFib);
    newFib % 2 === 0 ? evenFib.push(newFib) : null;
    current++;
  }

  const total = evenFib.reduce((a, b) => a + b, 0);
  console.log(total);
  return total;
}

fiboEvenSum(43);
