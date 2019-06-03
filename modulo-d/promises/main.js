var minhaPromise = function(){
    return new Promise(function(resolse, reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/stefanopaulo')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr === 200){
                    resolse(JSON.parse(xrh.responseText))
                } else {
                    reject('Erro na requisiçao')
                }
            }
        }
    })
}

minhaPromise()
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.warn(err)
    })

// https://api.github.com/users/stefanopaulo