// operadores lógicos em javascript

var sexo = 'M', idade = 23

if(sexo === 'M' && idade >= 18){
    console.log('Ok.')
} // true

if(sexo === 'M' || idade >= 18){
    console.log('Ok.')
} // true

if(sexo !== 'M'){
    console.log('Ok.')
} // false