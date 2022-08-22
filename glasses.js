status1 = "";
img = "";

function preload(){
    img = loadImage('glasses.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log('Model Loaded!');
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    console.log(results);
    objects = results;
}