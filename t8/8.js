const btn = document.querySelector("button")


btn.addEventListener("click", () => {

    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const select = document.getElementById("operation").value
    const result = document.getElementById("result")



    switch (select) {
        case "add":
           result.innerText = Number(num1.value) + Number(num2.value);
            break;
        case "sub":
           result.innerText = Number(num1.value) - Number(num2.value);
            break;
        case "multi":
           result.innerText = Number(num1.value) * Number(num2.value);
            break;
        case "div":
           result.innerText = Number(num1.value) / Number(num2.value);
            break;
        default:
            break;
    }

    num1.value = null
    num2.value = null




})