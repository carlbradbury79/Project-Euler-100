function sumSquareDifference(n) {
    let nums = []
    for (let i=1;i<n+1;i++){
        nums.push(i)
        console.log(i)
    }

    const sumOfSquare = nums.reduce((a, b)=> {
        b = Math.pow(b, 2);
        return a + b
    }, 0)

    const squareOfSum = nums.reduce((a, b)=> {
        return a + b
    }, 0)

    return Math.pow(squareOfSum, 2) - sumOfSquare;
  }
  
  sumSquareDifference(10);
  