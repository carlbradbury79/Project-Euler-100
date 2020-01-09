function largestPalindromeProduct(n) {
    let x = 1 //Left opperand
    let y = 1 //Right operand
    let palindrones = []
    while (x.toString().length !== n+1)
    {
        while(y.toString().length!==n+1) { //Nested loop to check both operands
            let product = x*y
            if(product === parseInt(product.toString().split("").reverse().join("")) ) // Reverse the value of product
            palindrones.push(product)
            y++
        }
        x++
        y=1
    }
    const largestPalindrone = palindrones.reduce((a,b) => {
        //Loop though array keeping the highest value, and therefore the largest palindrone product
        if (b > a) {
            return b
        } else {    
            return a
        }
    }, 0)
    console.log(largestPalindrone)

    return largestPalindrone;
  } 
  
  largestPalindromeProduct(3);
