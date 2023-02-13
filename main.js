function setup(){
    canvas = createCanvas(280,280)
   canvas.center() 
   background("white")
   canvas.mouseReleased(reconocer_dibujo)
   synth = window.speechSynthesis;
}
function draw(){
    strokeWeight(13)
    stroke("orange")
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet")
}
function reconocer_dibujo (){
    classifier.classify(canvas,resultado)
}

function resultado(error,respuesta){
    document.getElementById("label").innerHTML = "etiqueta: " + respuesta[0].label
    document.getElementById("confidence").innerHTML = "confianza: " + Math.round(respuesta[0].confidence *100) + "%"
    utterThis = new SpeechSynthesisUtterance(respuesta[0].label);
synth.speak(utterThis)
} 
function limpiarLienzo(){
    background("white")
}
