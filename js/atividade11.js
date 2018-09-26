function mostrarTexto() {
    document.getElementById('texto').style.display = 'block'
}

function ocultarTexto() {
    document.getElementById('texto').style.display = 'none' 
}

function trocarCor() {
    document.getElementById('texto').style.color = 'blue' 
}

function mudartexto(){
    var novotexto = document.getElementById("colocartexto").value;
    document.getElementById("texto").innerHTML = novotexto;
}