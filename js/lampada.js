const lamp = document.getElementById("lamp")
let contador = 0
function lampada(){
    contador++
    if ((lamp.src.match("img/lampada_apagada.png")) && (contador <= 10)){
        lamp.src = 'img/lampada_acesa.png'
    }
    else if ((lamp.src.match("img/lampada_acesa.png")) && (contador <= 10)){
        lamp.src = 'img/lampada_apagada.png'
    }
    else if (contador > 10){
        lamp.src = 'img/lampada_quebrada.png'
    }
    document.getElementById("demo").innerHTML = contador
}
