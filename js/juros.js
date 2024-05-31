function juros(){
    let C = +document.getElementById("capital").value
    let i = +document.getElementById("taxa").value/100
    let t = +document.getElementById("tempo").value
    let M = C*(1 + i)**t

    document.getElementById("result").innerHTML = `R$ ${M.toFixed(2).replace(".",",")}`
}