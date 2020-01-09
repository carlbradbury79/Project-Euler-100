function smallestMult(n) {
    let count = 1
    let current = 1
    while (count != n+1) { //When this is true each of the numbers from 1 to n has been checked
        if (current % count === 0){
           count++
        } else {
            // The latest mod check has failed, so the count is restarted and the next positive number is checked 
            current++
            count=1
        }
    }
    console.log(current)
  }
  
  smallestMult(20);
