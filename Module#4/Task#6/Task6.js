const form = document.querySelector("form");
const Joke = document.querySelector("#Joke")
form.addEventListener("submit", async function (e) {
    e.preventDefault()
    let input = form.elements.q.value
    let api = await fetch(`https://api.chucknorris.io/jokes/search?query=${input}`)
    let x = await api.json()

    const rand = Math.floor(Math.random() * x.result.length - 1)
    let joke = x.result[rand];
    console.log(joke.value)
    Joke.innerHTML = `<article>
    <p>${joke.value}</p>
    </article>`
  
})

