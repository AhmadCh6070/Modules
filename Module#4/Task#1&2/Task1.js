const form = document.querySelector("form");
form.addEventListener("submit",async function (e){
    e.preventDefault()
    let input = form.elements.q.value
    let api = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    let x = await api.json()
    input.value = ""
    console.log(x);
})