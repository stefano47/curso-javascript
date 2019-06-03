// funções em javascript

function soma(num1, num2){
    // essa variavél resultado é de escopo local
    var res = num1 + num2
    
    return res
}

// essa variavél resultado é de escopo global
var res = soma(3, 5)
console.log(res)

