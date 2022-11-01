var leftwristX = 0;
var rightwristX = 0;
var difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(380, 150)

    canvas = createCanvas(550, 500);
    canvas.position(1080, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    background('burlywood');
    document.getElementById("font_size").innerHTML = "Font size of the text will be: " + difference + "px";
    textSize(difference);
    fill('black');
    text("Hello", 50, 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}
