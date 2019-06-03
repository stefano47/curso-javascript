function pares(num1, num2){
    if(num1 > num2){
        for(var c = num2; c <= num1; c++){
            if(c % 2 == 0){
                console.log(c)
            }
        }
    } 
    
    if(num2 > num1) {
        for(var c = num1; c <= num2; c++){
            if(c % 2 == 0){
                console.log(c)
            }
        }
    }
}
pares(1, 10)