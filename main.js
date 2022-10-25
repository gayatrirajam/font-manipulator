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

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background('burlywood');
}
