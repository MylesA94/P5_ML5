let mobilenet;

function modelReady() {
  console.log("Model is ready!!!");
}

function setup() {
  console.log("ml5 version:", ml5.version);
  createCanvas(640, 480);
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
