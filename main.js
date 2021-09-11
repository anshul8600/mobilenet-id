Webcam.set({
width:350, 
height:350,
image_format:"png",
png_quality:90,
constraints:{facingMode:"environment"}
});

c1 = document.getElementById("camera");
Webcam.attach (c1);
function takephoto(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="myimage" src="'+data_uri+'">';
}
);
}
console.log('ml5 version: ', ml5.version);
mymodel = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("mobilenet has loaded");
}
function checkphoto(){
i1 = document.getElementById("myimage");
mymodel.classify(i1, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
else{
console.log(results);
document.getElementById("objectname").innerHTML = results[0].label;
}
}
