function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    for(a = 1; a < n; a++){
        for(b=1; b < n; b++){
            for(c=1; c< n; c++) {
                if(a*a + b*b === c*c && a + b + c ===n && a < b && b < c) {
                    console.log(a, b, c)
                    console.log(a*a + b*b + c*c)
                }
            }
        }
    }
    // Good luck!
    return true;
   }
   
   specialPythagoreanTriplet(1000);
   