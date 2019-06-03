function temHabilidades(skills){
    if(skills.indexOf('Javascript') == 0){
        return true
    } else {
        return false
    }
}

var skills = ['Javascript', 'Elixer', 'NodeJS']
console.log(temHabilidades(skills))