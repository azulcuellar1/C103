Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camara=document.getElementById("camara");
Webcam.attach('#camara');
function tomar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById('resultado').innerHTML='<img id="foto" src=" '+data_uri+' "/>';
        })
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6reTcKd16/model.json',modelLoaded)
function modelLoaded(){
    console.log("modelo cargado");
}
function identificar_objeto(){
    img=document.getElementById("foto");
    classifier.classify(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
        }else{
            console.log(results);
            document.getElementById("resultado_nombre").innerHTML=results[0].label;
            document.getElementById("resultado_porcentaje").innerHTML= results[0].confidence.toFixed(3);
    }
}





















