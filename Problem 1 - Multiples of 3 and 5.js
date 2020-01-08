function multiplesOf3and5(number) {
  totalMultiples = [];
  count = 1;
  while (count !== number) {
    if (count % 3 === 0 || count % 5 === 0) {
      totalMultiples.push(count);
    }
    count++;
  }
  const total = totalMultiples.reduce((a, b) => a + b, 0);
  return total;
}

multiplesOf3and5(49);
