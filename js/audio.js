function falar(){
    let texto = document.querySelector("#texto").value
    const speech = new SpeechSynthesisUtterance()
    speech.text = `${texto}`
    speech.lang = "pt-br"
    window.speechSynthesis.speak(speech)
    
    document.querySelector("#msg").innerHTML = `${texto}`
    document.querySelector("#texto").value = ""
}