axios.get('https://api.github.com/users/stefanopaulo')
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.warn(err)
    })
// https://api.github.com/users/stefanopaulo