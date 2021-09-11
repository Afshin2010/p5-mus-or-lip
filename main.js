noseX = 0;
noseY = 0;
mus_or_lip = document.getElementById("pic").innerHTML;
function preload() {
Mustache= loadImage("https://i.postimg.cc/ht5hBPYm/m.png");
Lipstick= loadImage("https://i.postimg.cc/BbFYp6KG/l1.png");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 400);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x -30;
    noseY = results[0].pose.nose.y +30;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}

function draw(){
if (mus_or_lip = "Mustache"){
image (video, 0, 0, 400, 400); 
image (Mustache, noseX, noseY, 80, 35);}
if (mus_or_lip = "Lipstick")
{
image (video, 0, 0, 400, 400); 
image (Lipstick, noseX, noseY, 80, 35);}
}

function take_snapshot() {
  save('myFilterImage.png');
}