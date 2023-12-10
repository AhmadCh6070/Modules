const target = document.getElementById('target')

const data = ["First item","Second item","Three item"]


for (let index = 0; index < data.length; index++) {
    const li = document.createElement("li")
    li.innerText = data[index]
    target.appendChild(li)
}