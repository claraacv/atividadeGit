
const numero = document.getElementById("numero")

const button = document.getElementById("button")
// let resposta = document.getElementById("resposta")
button.addEventListener("click", function() {
    let valorNumero = numero.value;
    for (let i = 1; i < 11; i++) {
        resposta.innerHTML += 
        `<p>${valorNumero} X ${i} = ${valorNumero * i}</p>`
    }
})
