


function dividir(){
let numero1 = Number(document.getElementById('numero1').value)
let numero2 = Number(document.getElementById('numero2').value)

let resultado = document.getElementById('resultado')

let divisao = numero1 / numero2

resultado.innerHTML = `<h2 class='fw-bolder'> O resultado da divisão é: ${divisao}</h2>`
}