function largestPrimeFactor(number) {
  let x = 2;
  let primeFactors = [];
  while (x !== number + 1) {
    if (number % x === 0) {
      primeFactors.push(x);
      console.log(primeFactors);
    }
    x++;
  }

  const largestPrimeFactor = primeFactors.reduce((largestSoFar, current) => {
    let c = 2;
    while (c !== current) {
      if (current % c === 0) {
        return largestSoFar;
      }
      c++;
    }
    return current;
  }, 0);
  console.log(largestPrimeFactor);
  return largestPrimeFactor;
}

largestPrimeFactor(13195);
