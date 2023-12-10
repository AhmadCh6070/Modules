const p = document.querySelector("p")

p.onmouseover = () => p.previousElementSibling.src = "img/picB.jpg"
p.onmouseleave = () => p.previousElementSibling.src = "img/picA.jpg"