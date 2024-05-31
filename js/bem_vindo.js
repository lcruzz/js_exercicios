function msg(){
    let nome = document.getElementById("nome").value
    let nasc = +document.getElementById("nasc").value
    let data = new Date
    let ano = data.getFullYear()
    let idade = ano - nasc
    document.getElementById("demo").innerHTML = `Olá ${nome}, seja bem vindo(a) ao nosso site! Você tem ${idade} anos.`

    document.getElementById("nome").value = ""
    document.getElementById("nasc").value = ""
}