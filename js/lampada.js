const lamp = document.getElementById("lamp")
let contador = 0
function lampada(){
    contador++
    if ((lamp.src.match("img/desligada.jpg")) && (contador <= 10)){
        lamp.src = 'img/ligada.jpg'
    }
    else if ((lamp.src.match("img/ligada.jpg")) && (contador <= 10)){
        lamp.src = 'img/desligada.jpg'
    }
    else if (contador > 10){
        lamp.src = 'img/quebrada.jpg'
    }
    document.getElementById("demo").innerHTML = contador
}
