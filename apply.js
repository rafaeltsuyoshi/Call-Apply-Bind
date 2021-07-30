function soma(num1, num2){
    console.log( this + num1 + num2)
}

soma.apply(2, [5, 5, 12, 12, 11])

soma.apply(3, [5, 5])