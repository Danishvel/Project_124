function preload(){

}

function draw() {
    
}

function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(900, 130);

    webcam = createCapture(VIDEO);
    webcam.size(450, 450);

    posenet = ml5.poseNet(webcam, Modelloaded);

    posenet.on('pose', gotPoses);
}

function Modelloaded() {
    console.log("Model Loaded!!!!!!!!!!!");
}

function gotPoses(results) {
   if (results.length > 0) {
       console.log(results);
   } 
}