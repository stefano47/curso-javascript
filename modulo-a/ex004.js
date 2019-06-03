// condicionais dentro do javascript

function retornaSexo(sexo){
    // if(sexo === 'M'){
    //     return 'Masculino!'
    // } else if(sexo === 'F') {
    //     return 'Feminino!'
    // } else {
    //     return 'Outro!'
    // } resolução com if.. else

    switch(sexo){
        case 'M':
            return 'Masculino'
            break
        case 'F':
            return 'Feminino'
            break
        default:
            return 'Outro'
    }
}

var res = retornaSexo('Mkdn')
console.log(res)