let contador = 0
function senhar(){
    let senha = document.getElementById("senha").value
    if (senha != "info2024"){
        while (contador < 3){
            contador++
            if ((contador < 3)){
                document.getElementById("mostrar").innerHTML = "senha incorreta " + contador
                break
                }
            else{
                document.getElementById("mostrar").innerHTML = "vc excedeu o máximo de tentativas " + contador
                break
                }
            }
        }
        
    else{
        document.getElementById("mostrar").innerHTML = "senha correta "
    }
    document.getElementById("senha").value = ""
}