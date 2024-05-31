function nomes(){
    let nome = document.getElementById("nome").value
    if ((nome == "Davidson") || (nome == "Luis") || (nome == "Sidio") || (nome == "davidson") || (nome == "luis") || (nome == "sidio")){
        alert(`Seja bem vindo professor ${nome}`)
    }
    else{
        alert(`Seja bem vindo(a) aluno(a) ${nome}`)
    }

}