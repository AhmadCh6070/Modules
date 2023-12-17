(async function(){
    let api = await fetch("https://api.chucknorris.io/jokes/random")
    let x = await api.json()
    console.log(x.value);

})()

